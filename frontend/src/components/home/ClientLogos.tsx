import React from 'react';

const brands = [
  { name: 'ABB', text: 'ABB' },
  { name: 'Shell', text: 'Shell' },
  { name: 'SIEMENS', text: 'SIEMENS' },
  { name: 'SINOPEC', text: 'SINOPEC' },
  { name: 'SCG', text: 'SCG' },
  { name: 'Linde', text: 'Linde' },
  { name: 'TOTAL', text: 'TOTAL' },
  { name: 'PetroChina', text: 'PetroChina' },
];

export default function ClientLogos() {
  return (
    <section className="py-4 bg-light border-top border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center gap-4 py-2">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-center opacity-75 hover-opacity-100 transition-all">
              <span className="fw-black fs-4 text-secondary text-uppercase tracking-wider font-sans">
                {brand.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
