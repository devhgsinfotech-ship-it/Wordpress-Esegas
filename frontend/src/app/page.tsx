import Hero from '@/components/home/Hero';
import AnalyzerPossibilities from '@/components/home/AnalyzerPossibilities';
import AboutSection from '@/components/home/AboutSection';
import MainProducts from '@/components/home/MainProducts';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import VideoSection from '@/components/home/VideoSection';
import LatestProjects from '@/components/home/LatestProjects';
import LatestNews from '@/components/home/LatestNews';
import StatsBar from '@/components/home/StatsBar';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ClientLogos from '@/components/home/ClientLogos';
import ContactSection from '@/components/home/ContactSection';
import { getWooProducts, getApplications, formatWpImageUrl } from '@/lib/wordpress';

export const revalidate = 60; // Server-side ISR revalidation every 60 seconds

export default async function HomePage() {
  // Fetch WooCommerce products & custom post type 'application' dynamically from local WordPress Docker container
  const [apiProducts, apiApplications] = await Promise.all([
    getWooProducts(6),
    getApplications(12),
  ]);

  // Map API products format directly from WordPress REST API response
  const formattedProducts = Array.isArray(apiProducts) && apiProducts.length > 0
    ? apiProducts.map((p: any) => {
        const rawImageUrl =
          p.images?.[0]?.src ||
          p._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          p._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
          '';

        return {
          id: p.id,
          name: p.name || p.title?.rendered || 'Gas Analyzer',
          description:
            p.short_description?.replace(/<[^>]*>?/gm, '') ||
            p.description?.replace(/<[^>]*>?/gm, '') ||
            p.excerpt?.rendered?.replace(/<[^>]*>?/gm, '') ||
            '',
          image: formatWpImageUrl(rawImageUrl),
          permalink: `/product`,
        };
      })
    : [];

  // Map API applications format directly from WordPress custom post type 'application'
  const formattedApplications = Array.isArray(apiApplications) && apiApplications.length > 0
    ? apiApplications
        .map((app: any) => {
          const rawImageUrl =
            app.images?.[0]?.src ||
            app._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
            app._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
            '';

          return {
            id: app.id,
            title: app.title?.rendered || app.title || app.name || 'Application',
            description:
              app.excerpt?.rendered?.replace(/<[^>]*>?/gm, '') ||
              app.description?.replace(/<[^>]*>?/gm, '') ||
              app.content?.rendered?.replace(/<[^>]*>?/gm, '') ||
              '',
            image: formatWpImageUrl(rawImageUrl),
            permalink: app.link || `/application`,
          };
        })
        .filter((app: any) => Boolean(app.image && app.image.trim() !== ''))
        .slice(0, 6)
    : [];

  return (
    <div className="d-flex flex-column">
      {/* 1. Industrial Hero Banner */}
      <Hero />

      {/* 2. Hot Gas Analyzer Possibilities */}
      <AnalyzerPossibilities />

      {/* 3. About ESE GAS */}
      <AboutSection />

      {/* 4. Our Main Products */}
      <MainProducts products={formattedProducts} />

      {/* 5. Applications Grid */}
      <ApplicationsSection applications={formattedApplications} />

      {/* 6. Video Showcase */}
      <VideoSection />

      {/* 7. Latest Projects */}
      <LatestProjects />

      {/* 8. Latest News */}
      <LatestNews />

      {/* 9. Impact Statistics Bar */}
      <StatsBar />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. Client Brand Logos */}
      <ClientLogos />

      {/* 12. Contact Us Form */}
      <ContactSection />
    </div>
  );
}
