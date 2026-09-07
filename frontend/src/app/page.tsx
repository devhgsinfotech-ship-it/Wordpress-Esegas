import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs';
import { getWooProducts } from '@/lib/wordpress';

export const revalidate = 60; // Server-side ISR revalidation every 60 seconds

export default async function HomePage() {
  // Fetch products from WordPress WooCommerce API
  const products = await getWooProducts(4);

  return (
    <div className="d-flex flex-column gap-5">
      <Hero />
      <Services />
      <FeaturedProducts initialProducts={products} />
      <WhyChooseUs />
    </div>
  );
}
