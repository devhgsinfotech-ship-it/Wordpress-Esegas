import React from 'react';

export interface ProjectItem {
  id: number | string;
  title: string;
  excerpt: string;
  image: string;
  tag?: string;
  link?: string;
}

interface LatestProjectsProps {
  projects?: ProjectItem[];
}

export default function LatestProjects({ projects = [] }: LatestProjectsProps) {
  const displayProjects = (projects || []).slice(0, 3);

  return (
    <section className="py-5 bg-light">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <small className="text-uppercase fw-bold text-secondary d-block mb-1" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
            CASE STUDIES
          </small>
          <h2 className="fw-bold" style={{ fontSize: '1.8rem', color: '#004d5a' }}>
            Latest Projects
          </h2>
        </div>

        {/* 3 Projects Grid */}
        {displayProjects && displayProjects.length > 0 ? (
          <div className="row g-4">
            {displayProjects.map((proj) => (
              <div key={proj.id} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded overflow-hidden bg-white d-flex flex-column justify-content-between">
                  <div>
                    <div className="position-relative" style={{ height: '180px' }}>
                      {proj.image ? (
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="img-fluid w-100 h-100 object-fit-cover"
                        />
                      ) : (
                        <div className="w-100 h-100 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center text-muted">
                          No Image
                        </div>
                      )}
                      <span
                        className="position-absolute top-0 end-0 font-weight-bold text-dark px-2.5 py-1 text-uppercase"
                        style={{ backgroundColor: '#ffb700', fontSize: '0.7rem', fontWeight: 'bold' }}
                      >
                        {proj.tag || 'PROJECT'}
                      </span>
                    </div>

                    <div className="p-4">
                      <h5 className="fw-bold mb-2 text-dark line-clamp-2" style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>
                        {proj.title}
                      </h5>
                      <p className="text-secondary small mb-3" style={{ fontSize: '0.85rem' }}>
                        {proj.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <a
                      href={proj.link || '#'}
                      className="text-decoration-none fw-bold"
                      style={{ color: '#d63384', fontSize: '0.85rem' }}
                    >
                      READ MORE &raquo;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 bg-white rounded-2 border shadow-sm my-2">
            <p className="text-muted mb-0 fw-semibold">No case studies/projects available from WordPress REST API.</p>
          </div>
        )}
      </div>
    </section>
  );
}

