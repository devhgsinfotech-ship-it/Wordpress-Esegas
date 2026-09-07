export const WP_INTERNAL_URL = process.env.WORDPRESS_INTERNAL_URL || 'http://wordpress';
export const WP_PUBLIC_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost:8090';

// Server-side data fetcher (runs inside Node/Next container talking directly to WP container)
export async function fetchFromWP(endpoint: string, options: RequestInit = {}) {
  const isServer = typeof window === 'undefined';
  const baseUrl = isServer ? WP_INTERNAL_URL : WP_PUBLIC_URL;
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  try {
    const res = await fetch(`${baseUrl}/wp-json${cleanEndpoint}`, {
      next: { revalidate: 60 }, // Cache revalidation every 60s
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!res.ok) {
      console.warn(`[WP API Warning] ${res.status} ${res.statusText} on ${endpoint}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`[WP API Error] Failed to fetch ${endpoint}:`, error);
    return null;
  }
}

// Fetch WooCommerce / WordPress Products dynamically via REST API
export async function getWooProducts(perPage = 6) {
  // 1. Try WooCommerce REST API endpoint
  let products = await fetchFromWP(`/wc/v3/products?per_page=${perPage}&status=publish`);
  
  // 2. Fallback to custom post type 'product'
  if (!products || !Array.isArray(products) || products.length === 0) {
    products = await fetchFromWP(`/wp/v2/product?per_page=${perPage}&_embed`);
  }

  // 3. Fallback to standard WP posts
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
  const posts = await fetchFromWP(`/wp/v2/posts?per_page=${perPage}&_embed`);
  if (!posts || !Array.isArray(posts)) {
    return [];
  }
  return posts;
}

// Fetch Custom Post Type 'application' (or fallback posts) dynamically via REST API
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

// Convert internal WP Docker image URLs to browser-accessible public URLs
export function formatWpImageUrl(url?: string): string {
  if (!url) return '';
  return url.replace(/^http:\/\/wordpress/i, WP_PUBLIC_URL);
}


