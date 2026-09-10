import React from 'react';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '15+', label: 'Patent Techs' },
  { value: '50+', label: 'Countries Exported' },
  { value: '5,000+', label: 'Installed Units' },
];

export default function StatsBar() {
  return (
    <section className="py-4 text-white" style={{ backgroundColor: '#004b5c' }}>
      <div className="container">
        <div className="row text-center align-items-center g-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div className="py-2">
                <h3 className="fw-black mb-0 text-white" style={{ fontSize: '2.2rem', fontFamily: 'sans-serif' }}>
                  {stat.value}
                </h3>
                <p className="mb-0 text-light small opacity-75" style={{ fontSize: '0.85rem' }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
