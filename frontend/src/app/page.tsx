import Hero from '@/components/home/Hero';
import AnalyzerPossibilities from '@/components/home/AnalyzerPossibilities';
import AboutSection from '@/components/home/AboutSection';
import MainProducts from '@/components/home/MainProducts';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import VideoSection from '@/components/home/VideoSection';
import LatestNews from '@/components/home/LatestNews';
import LatestArticles from '@/components/home/LatestArticles';
import StatsBar from '@/components/home/StatsBar';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ClientLogos from '@/components/home/ClientLogos';
import { getWooProducts, getApplications, getLatestPosts, getArticles, formatWpImageUrl } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching so newly created WP posts reflect instantly

export default async function HomePage() {
  // Fetch WooCommerce products, custom post type 'application', standard blog posts, and articles dynamically from local WordPress Docker container
  const [apiProducts, apiApplications, apiPosts, apiArticles] = await Promise.all([
    getWooProducts(6),
    getApplications(12),
    getLatestPosts(6),
    getArticles(6),
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

  // Map latest 3 blog posts directly from WordPress REST API (/wp/v2/posts?_embed)
  const latestPostsList = Array.isArray(apiPosts) && apiPosts.length > 0
    ? apiPosts.slice(0, 3)
    : [];

  const formattedPosts = latestPostsList.length > 0
    ? latestPostsList.map((post: any) => {
        const rawImageUrl =
          post.images?.[0]?.src ||
          post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
          '';

        const categoryName =
          post._embedded?.['wp:term']?.[0]?.[0]?.name ||
          'NEWS';

        const formattedDate = post.date
          ? new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          : '';

        return {
          id: post.id,
          title: post.title?.rendered || post.title || 'Event Update',
          excerpt:
            post.excerpt?.rendered?.replace(/<[^>]*>?/gm, '') ||
            post.content?.rendered?.replace(/<[^>]*>?/gm, '') ||
            '',
          image: formatWpImageUrl(rawImageUrl),
          category: categoryName.toUpperCase(),
          date: formattedDate,
          link: post.link || `/blog`,
        };
      })
    : [];

  // Map API articles directly from WordPress REST API (/wp/v2/article or fallback)
  const formattedArticles = Array.isArray(apiArticles) && apiArticles.length > 0
    ? apiArticles.map((art: any) => {
        const rawImageUrl =
          art.images?.[0]?.src ||
          art._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          art._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
          '';

        const categoryName =
          art._embedded?.['wp:term']?.[0]?.[0]?.name ||
          art.category ||
          'ARTICLE';

        const formattedDate = art.date
          ? new Date(art.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          : '';

        return {
          id: art.id,
          title: art.title?.rendered || art.title || 'Gas Analysis Article',
          excerpt:
            art.excerpt?.rendered?.replace(/<[^>]*>?/gm, '') ||
            art.content?.rendered?.replace(/<[^>]*>?/gm, '') ||
            '',
          image: formatWpImageUrl(rawImageUrl),
          category: categoryName.toUpperCase(),
          date: formattedDate,
          link: art.link || `/blog`,
        };
      })
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

      {/* 7. Latest Events */}
      <LatestNews posts={formattedPosts} />

      {/* 8. Latest Articles (Dynamic from WordPress REST API) */}
      <LatestArticles articles={formattedArticles} />

      {/* 9. Impact Statistics Bar */}
      <StatsBar />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. Client Brand Logos */}
      <ClientLogos />
    </div>
  );
}

