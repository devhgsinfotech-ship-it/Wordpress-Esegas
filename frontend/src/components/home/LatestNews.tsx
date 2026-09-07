import React from 'react';

const news = [
  {
    id: 1,
    title: 'ESE GAS Launches New Generation TDLAS Laser Gas Analyzer',
    excerpt: 'Our engineering R&D team has released the latest ultra-compact in-situ laser analyzer with sub-ppm precision and automatic self-calibration.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop',
    tag: 'PRODUCT LAUNCH',
  },
  {
    id: 2,
    title: 'Successful Commissioning of CEMS Project in South America',
    excerpt: 'Engineers completed testing and integration of 12 sets of flue gas Continuous Emission Monitoring Systems for a major mining conglomerate.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=500&auto=format&fit=crop',
    tag: 'GLOBAL PROJECT',
  },
  {
    id: 3,
    title: 'Environmental Protection & Green Energy Tech Summit 2026',
    excerpt: 'ESE GAS demonstrated advanced VOC monitoring systems and zero-emission gas analysis technologies at the international expo.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=500&auto=format&fit=crop',
    tag: 'EXHIBITION',
  },
];

export default function LatestNews() {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <small className="text-uppercase fw-bold text-secondary d-block mb-1" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
            COMPANY UPDATES
          </small>
          <h2 className="fw-bold" style={{ fontSize: '1.8rem', color: '#004b93' }}>
            Latest News
          </h2>
        </div>

        {/* 3 News Cards Grid */}
        <div className="row g-4">
          {news.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded overflow-hidden bg-light d-flex flex-column justify-content-between">
                <div>
                  <div className="position-relative" style={{ height: '180px' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                    <span
                      className="position-absolute top-0 end-0 font-weight-bold text-dark px-2.5 py-1 text-uppercase"
                      style={{ backgroundColor: '#ffb700', fontSize: '0.7rem', fontWeight: 'bold' }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-4">
                    <h5 className="fw-bold mb-2 text-dark line-clamp-2" style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>
                      {item.title}
                    </h5>
                    <p className="text-secondary small mb-3" style={{ fontSize: '0.85rem' }}>
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <a
                    href={`#news-${item.id}`}
                    className="text-decoration-none fw-bold"
                    style={{ color: '#dc2626', fontSize: '0.85rem' }}
                  >
                    READ MORE &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
