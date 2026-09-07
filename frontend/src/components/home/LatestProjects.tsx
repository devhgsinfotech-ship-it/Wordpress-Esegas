import React from 'react';

const projects = [
  {
    id: 1,
    title: 'CEMS Installation for 600MW Thermal Power Plant',
    excerpt: 'Turnkey installation of multi-component Continuous Emission Monitoring Systems (SO2, NOx, CO, O2) for ultra-low emission boiler compliance.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=500&auto=format&fit=crop',
    tag: 'POWER PLANT',
  },
  {
    id: 2,
    title: 'Laser Gas Analysis for Steel Mill Blast Furnace',
    excerpt: 'Implementation of high-temperature in-situ TDLAS laser gas analyzers for converter gas recovery and explosion safety monitoring.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=500&auto=format&fit=crop',
    tag: 'STEEL MILL',
  },
  {
    id: 3,
    title: 'VOC Monitoring System for Pharmaceutical Park',
    excerpt: 'Deployment of online FID/PID volatile organic compound gas analyzers connected to environmental authority monitoring networks.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=500&auto=format&fit=crop',
    tag: 'CHEMICAL',
  },
];

export default function LatestProjects() {
  return (
    <section className="py-5 bg-light">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <small className="text-uppercase fw-bold text-secondary d-block mb-1" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
            CASE STUDIES
          </small>
          <h2 className="fw-bold" style={{ fontSize: '1.8rem', color: '#004b93' }}>
            Latest Projects
          </h2>
        </div>

        {/* 3 Projects Grid */}
        <div className="row g-4">
          {projects.map((proj) => (
            <div key={proj.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded overflow-hidden bg-white d-flex flex-column justify-content-between">
                <div>
                  <div className="position-relative" style={{ height: '180px' }}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                    <span
                      className="position-absolute top-0 end-0 font-weight-bold text-dark px-2.5 py-1 text-uppercase"
                      style={{ backgroundColor: '#ffb700', fontSize: '0.7rem', fontWeight: 'bold' }}
                    >
                      {proj.tag}
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
                    href={`#project-${proj.id}`}
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
