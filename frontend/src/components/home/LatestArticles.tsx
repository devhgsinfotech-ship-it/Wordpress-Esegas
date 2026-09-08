import React from 'react';

export interface ArticleItem {
  id: number | string;
  title: string;
  excerpt: string;
  image: string;
  category?: string;
  date?: string;
  link?: string;
}

interface LatestArticlesProps {
  articles?: ArticleItem[];
}

export default function LatestArticles({ articles = [] }: LatestArticlesProps) {
  const displayArticles = (articles || []).slice(0, 3);

  return (
    <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-3 py-md-4">
        {/* Section Header with Top Label & Line */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span
              className="fw-bold text-uppercase"
              style={{ fontSize: '0.8rem', color: '#eab308', letterSpacing: '1px' }}
            >
              UPDATE
            </span>
            <div className="flex-grow-1" style={{ height: '2px', backgroundColor: '#004d5a', opacity: 0.25 }}></div>
          </div>
          <h2 className="fw-bold mb-0" style={{ fontSize: '1.9rem', color: '#004d5a' }}>
            Latest Articles
          </h2>
        </div>

        {/* 3 Articles Cards Grid matching reference screenshot */}
        {displayArticles && displayArticles.length > 0 ? (
          <div className="row g-4 justify-content-center">
            {displayArticles.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div
                  className="card h-100 border-0 rounded-1 overflow-hidden bg-white d-flex flex-column justify-content-between"
                  style={{
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.07)',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div>
                    {/* Featured Image with Top-Right Yellow Category Tag */}
                    <div className="position-relative bg-light overflow-hidden" style={{ height: '210px' }}>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid w-100 h-100 object-fit-cover"
                        />
                      ) : (
                        <div className="w-100 h-100 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center text-muted">
                          No Image
                        </div>
                      )}
                      <span
                        className="position-absolute top-0 end-0 text-uppercase fw-bold text-dark px-3 py-1"
                        style={{
                          backgroundColor: '#ffc107',
                          fontSize: '0.68rem',
                          letterSpacing: '0.4px',
                          borderRadius: '0 0 0 3px',
                          zIndex: 2,
                        }}
                      >
                        {item.category || 'ARTICLE'}
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <div className="p-4">
                      <h5
                        className="fw-bold mb-3"
                        style={{
                          color: '#004d5a',
                          fontSize: '1.05rem',
                          lineHeight: '1.38',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: '4.2em',
                        }}
                      >
                        {item.title}
                      </h5>
                      <p
                        className="text-secondary small mb-3 lh-base"
                        style={{
                          color: '#4a5568',
                          fontSize: '0.85rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: '3.8em',
                        }}
                      >
                        {item.excerpt}
                      </p>

                      {/* READ MORE » Link */}
                      <div className="pt-2">
                        <a
                          href={item.link || '#'}
                          className="text-decoration-none fw-bold text-uppercase"
                          style={{ color: '#d63384', fontSize: '0.85rem', letterSpacing: '0.5px' }}
                        >
                          READ MORE &raquo;
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Footer Date (if available) */}
                  {item.date && (
                    <div className="px-4 py-3 border-top border-light bg-white">
                      <small className="text-muted" style={{ fontSize: '0.78rem' }}>
                        {item.date}
                      </small>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 bg-white rounded-2 border shadow-sm my-2">
            <p className="text-muted mb-0 fw-semibold">No articles available from WordPress REST API.</p>
          </div>
        )}
      </div>
    </section>
  );
}
