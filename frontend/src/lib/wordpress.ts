export const WP_INTERNAL_URL = process.env.WORDPRESS_INTERNAL_URL || 'http://wordpress';
export const WP_PUBLIC_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost:8090';

export function getPublicWpUrl(): string {
  if (typeof window !== 'undefined') {
    return 'http://localhost:8090';
  }
  return WP_PUBLIC_URL;
}

// Server-side & Client-side robust WP API fetcher
export async function fetchFromWP(endpoint: string, options: RequestInit = {}) {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const isServer = typeof window === 'undefined';

  const urlsToTry = isServer
    ? ['http://localhost:8090', 'http://127.0.0.1:8090', process.env.WORDPRESS_INTERNAL_URL || 'http://wordpress']
    : ['http://localhost:8090', 'http://127.0.0.1:8090'];

  for (const baseUrl of urlsToTry) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      const res = await fetch(`${baseUrl}/wp-json${cleanEndpoint}`, {
        next: { revalidate: 300 },
        signal: controller.signal,
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        return await res.json();
      }
    } catch (error) {
      continue;
    }
  }

  return null;
}

// Convert internal WP Docker image URLs to browser-accessible public URLs with fallback
export function formatWpImageUrl(url?: string): string {
  if (!url || typeof url !== 'string' || url.trim() === '') {
    return 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop';
  }
  return url.replace(/^http:\/\/(wordpress|127\.0\.0\.1:8090)/i, 'http://localhost:8090');
}

// Fetch WooCommerce / WordPress Products dynamically via REST API
export async function getWooProducts(perPage = 6) {
  let products = await fetchFromWP(`/wp/v2/product?per_page=${perPage}&_embed`);

  if (!products || !Array.isArray(products) || products.length === 0) {
    products = await fetchFromWP(`/wp/v2/posts?per_page=${perPage}&_embed`);
  }

  if (!products || !Array.isArray(products)) {
    return [];
  }
  return products;
}

// Fetch Posts / News / Announcements
export async function getLatestPosts(perPage = 3) {
  let posts = await fetchFromWP(`/wp/v2/posts?per_page=${perPage}&_embed&orderby=date&order=desc`);

  if (!posts || !Array.isArray(posts)) {
    return [];
  }
  return posts;
}

// Fetch Custom Post Type 'application' (or fallback posts)
export async function getApplications(perPage = 6) {
  let apps = await fetchFromWP(`/wp/v2/application?per_page=${perPage}&_embed`);

  if (!apps || !Array.isArray(apps) || apps.length === 0) {
    apps = await fetchFromWP(`/wp/v2/posts?per_page=${perPage}&_embed`);
  }

  if (!apps || !Array.isArray(apps)) {
    return [];
  }
  return apps;
}

// Fetch Custom Post Type 'article' (or fallback posts)
export async function getArticles(perPage = 6) {
  let articles = await fetchFromWP(`/wp/v2/posts?per_page=${perPage}&_embed`);

  if (!articles || !Array.isArray(articles)) {
    return [];
  }
  return articles;
}

// Fetch Product Categories from WordPress REST API (/wp/v2/product_cat)
export async function getProductCategories() {
  const categories = await fetchFromWP('/wp/v2/product_cat?per_page=100');
  if (!categories || !Array.isArray(categories)) {
    return [];
  }
  return categories
    .filter((c: any) => c.count > 0 && c.slug !== 'uncategorized')
    .sort((a: any, b: any) => a.name.localeCompare(b.name));
}

// Server in-memory products cache for lightning-fast 0ms responses
let cachedProducts: any[] | null = null;
let lastProductsFetchTime = 0;

// Fetch All Products with Parallel Chunking & In-Memory Cache
export async function getAllProducts() {
  const now = Date.now();
  // Return cached result if less than 5 minutes old
  if (cachedProducts && cachedProducts.length > 0 && now - lastProductsFetchTime < 300000) {
    return cachedProducts;
  }

  // Parallel fetch 4 pages of 20 products with optimized field selection
  const pages = [1, 2, 3, 4];
  const promises = pages.map(page =>
    fetchFromWP(`/wp/v2/product?per_page=20&page=${page}&_embed&_fields=id,title,link,product_cat,_links,_embedded`)
  );

  const results = await Promise.all(promises);
  const rawProducts = results.filter(res => Array.isArray(res)).flat();

  if (rawProducts.length === 0 && cachedProducts) {
    return cachedProducts;
  }

  const formatted = rawProducts.map((p: any) => {
    const rawImage =
      p._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
      p._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
      p.images?.[0]?.src ||
      '';

    return {
      id: p.id,
      title: p.title?.rendered || p.title || 'Gas Analyzer Product',
      image: formatWpImageUrl(rawImage),
      link: p.link || `/product`,
      categoryIds: Array.isArray(p.product_cat) ? p.product_cat : [],
    };
  });

  if (formatted.length > 0) {
    cachedProducts = formatted;
    lastProductsFetchTime = now;
  }

  return formatted.length > 0 ? formatted : (cachedProducts || []);
}
