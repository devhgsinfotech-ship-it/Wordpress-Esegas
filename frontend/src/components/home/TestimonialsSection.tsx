import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'The CEMS laser gas analysis system supplied by ESE GAS has operated continuously in our power plant for 2 years without a single sensor failure. Measurement accuracy and zero-drift performance exceed all regulatory compliance standards.',
    author: 'Chief Engineering Officer',
    company: 'Global Energy Power Corp',
  },
  {
    id: 2,
    quote: 'ESE GAS provided turnkey engineering and custom gas analyzer cabinets for our chemical plant. Their technical support engineers responded immediately to site commissioning requirements. Exceptional quality and reliability.',
    author: 'Plant Operations Director',
    company: 'Sino-Chem Refineries',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '1.8rem', color: '#004b93' }}>
            Testimonials
          </h2>
        </div>

        {/* 2 Testimonial Cards */}
        <div className="row g-4 justify-content-center">
          {testimonials.map((item) => (
            <div key={item.id} className="col-md-6">
              <div className="card h-100 border p-4 shadow-sm rounded bg-light position-relative">
                <Quote size={28} style={{ color: '#f97316' }} className="mb-3" />
                <p className="text-secondary small mb-4 lh-lg font-italic" style={{ fontSize: '0.9rem' }}>
                  "{item.quote}"
                </p>
                <div className="pt-3 border-top">
                  <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.95rem' }}>
                    {item.author}
                  </h6>
                  <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                    {item.company}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
