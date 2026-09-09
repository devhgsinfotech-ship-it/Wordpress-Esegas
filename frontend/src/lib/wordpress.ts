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
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(`${baseUrl}/wp-json${cleanEndpoint}`, {
        next: { revalidate: 60 },
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

// Convert internal WP Docker image URLs to browser-accessible public URLs
export function formatWpImageUrl(url?: string): string {
  if (!url) return '';
  return url.replace(/^http:\/\/(wordpress|127\.0\.0\.1:8090)/i, 'http://localhost:8090');
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

// Fetch Paginated Products with Category Filtering from WordPress REST API (/wp/v2/product)
export async function getProductsCatalog(catId?: number | null, page = 1, perPage = 15) {
  let endpoint = `/wp/v2/product?per_page=${perPage}&page=${page}&_embed`;
  if (catId) {
    endpoint += `&product_cat=${catId}`;
  }

  const isServer = typeof window === 'undefined';
  const urlsToTry = isServer
    ? ['http://localhost:8090', 'http://127.0.0.1:8090', process.env.WORDPRESS_INTERNAL_URL || 'http://wordpress']
    : ['http://localhost:8090', 'http://127.0.0.1:8090'];

  for (const baseUrl of urlsToTry) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(`${baseUrl}/wp-json${endpoint}`, {
        next: { revalidate: 60 },
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const totalProducts = parseInt(res.headers.get('x-wp-total') || '0', 10);
        const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);
        const products = await res.json();

        return {
          products: Array.isArray(products) ? products : [],
          totalProducts,
          totalPages,
        };
      }
    } catch (error) {
      continue;
    }
  }

  return { products: [], totalProducts: 0, totalPages: 1 };
}
