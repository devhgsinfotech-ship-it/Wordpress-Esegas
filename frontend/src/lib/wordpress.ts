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

// Fetch WooCommerce Products
export async function getWooProducts(perPage = 6) {
  const products = await fetchFromWP(`/wc/v3/products?per_page=${perPage}&status=publish`);
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
