import React from 'react';

interface ApplicationItem {
  id: number;
  title: string;
  description: string;
  image: string;
  permalink?: string;
}

interface ApplicationsSectionProps {
  applications?: ApplicationItem[];
}

export default function ApplicationsSection({ applications = [] }: ApplicationsSectionProps) {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#edf7fa' }}>
      <div className="container py-3 py-md-4">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" style={{ fontSize: '1.9rem', color: '#004d5a', letterSpacing: '0.5px' }}>
            Applications
          </h2>
        </div>

        {/* 6 Application Cards Grid directly from REST API */}
        {applications && applications.length > 0 ? (
          <>
            <div className="row g-4 justify-content-center">
              {applications.slice(0, 6).map((app) => (
                <div key={app.id} className="col-md-6 col-lg-4">
                  <div
                    className="card h-100 border-0 rounded-1 overflow-hidden bg-white text-center d-flex flex-column justify-content-between"
                    style={{
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                  >
                    <div>
                      {/* Full-width Cover Image */}
                      <div className="bg-light" style={{ height: '180px' }}>
                        <img
                          src={app.image}
                          alt={app.title}
                          className="img-fluid w-100 h-100 object-fit-cover"
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="p-4">
                        <h5 className="fw-bold mb-3" style={{ color: '#00596b', fontSize: '1.15rem' }}>
                          {app.title}
                        </h5>
                        <p
                          className="text-secondary small mb-2 lh-base text-center"
                          style={{
                            fontSize: '0.86rem',
                            color: '#4a5568',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            minHeight: '3.9em',
                          }}
                        >
                          {app.description}
                        </p>
                      </div>
                    </div>

                    {/* Yellow "Learn More" Button */}
                    <div className="pb-4 d-flex justify-content-center">
                      <a
                        href={app.permalink || '#'}
                        className="btn fw-bold px-4 py-2 text-dark shadow-sm"
                        style={{
                          backgroundColor: '#ffc107',
                          borderColor: '#ffc107',
                          fontSize: '0.88rem',
                          borderRadius: '2px',
                          fontWeight: 700,
                        }}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* "Discover More" Button below Applications Grid */}
            <div className="text-center mt-5">
              <a
                href="/blog"
                className="btn fw-bold px-4 py-2 text-dark shadow-sm"
                style={{
                  backgroundColor: '#ffc107',
                  borderColor: '#ffc107',
                  fontSize: '0.92rem',
                  borderRadius: '2px',
                  fontWeight: 700,
                }}
              >
                Discover More
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-5 bg-white rounded-2 border shadow-sm my-3">
            <p className="text-muted mb-0 fw-semibold">No applications available from WordPress REST API.</p>
          </div>
        )}
      </div>
    </section>
  );
}


