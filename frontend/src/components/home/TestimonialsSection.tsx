'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    author: 'Андрей',
    location: 'Moscow',
    rating: 5,
    quote: `"I'm Андрей, from Moscow. As a quality control manager for a chemical company, we use Enviro's gas analyzers to monitor gas emissions at our plants. The performance of this instrument is impressive. It provides accurate, reliable gas measurements and is very simple to operate. We can easily detect potential contamination problems and take timely measures to protect the environment and the health and safety of employees. Enviro's customer support team is very professional and responsive, they provide excellent training and technical support that allows us to take full advantage of the capabilities of this instrument. I highly recommend ESE gas analyzers, especially for the chemical industry or areas where tight control of gas emissions is required, as a reliable and efficient solution."`,
  },
  {
    id: 2,
    author: 'John Smith',
    location: 'London, UK',
    rating: 5,
    quote: `I am From & Metals Institute Swansea University we are purchased syngas analyzer from Enviro Solutions Tech to measure CH4,H2,CO,CO2 for the process gases monitoring .it compact design .light weight .touch screen with USB port ." We have got one of your gas analysers and on set up everything was fine, and calibration was fine"he said`,
  },
  {
    id: 3,
    author: 'Michael Weber',
    location: 'Munich, Germany',
    rating: 5,
    quote: `"We installed ESE Technology's Continuous Emission Monitoring System (CEMS) in our waste-to-energy facility. The online TDL gas analyzer delivers exceptional accuracy with zero baseline drift even under high moisture conditions. Excellent technical support team!"`,
  },
  {
    id: 4,
    author: 'Sharon Ye',
    location: 'Singapore',
    rating: 5,
    quote: `"The Portable FTIR Gas Analyzer from ESEGAS is indispensable for our laboratory gas analysis and field environmental auditing. Compact, user-friendly interface, and quick calibration. Highly recommended for industrial process control."`,
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2 cards per slide view on desktop
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="py-5 bg-white">
      <div className="container py-3 py-md-4">
        {/* Section Header */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="fw-bold mb-0" style={{ fontSize: '2.1rem', color: '#004d5a' }}>
            Testimonials
          </h2>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="position-relative overflow-hidden px-1 py-1">
          <div
            className="d-flex transition-all"
            style={{
              transform: `translateX(-${currentSlide * 50}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="col-12 col-md-6 flex-shrink-0 px-2.5"
              >
                <div
                  className="card h-100 p-4 border-0 rounded-1"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  {/* Card Header: Author Name & G+ Badge */}
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div
                      className="fw-bold"
                      style={{ color: '#004d5a', fontSize: '0.98rem' }}
                    >
                      {item.author}
                      <span className="fw-bold" style={{ color: '#004d5a' }}>
                        {item.location}
                      </span>
                    </div>

                    {/* Red Google G+ Review Badge */}
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#dd4b39',
                        fontSize: '0.62rem',
                        lineHeight: 1,
                      }}
                    >
                      G+
                    </div>
                  </div>

                  {/* 5 Stars Rating */}
                  <div className="mb-3">
                    <span
                      style={{
                        color: '#f59e0b',
                        fontSize: '1rem',
                        letterSpacing: '2px',
                      }}
                    >
                      ★★★★★
                    </span>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p
                    className="mb-0 lh-base"
                    style={{
                      color: '#4a5568',
                      fontSize: '0.84rem',
                      lineHeight: '1.55',
                    }}
                  >
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots matching reference screenshot */}
        <div className="d-flex align-items-center justify-content-center gap-2 mt-4 pt-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="border-0 p-0 rounded-circle transition-all"
              style={{
                width: idx === currentSlide ? '8px' : '6px',
                height: idx === currentSlide ? '8px' : '6px',
                backgroundColor: idx === currentSlide ? '#1e293b' : '#cbd5e1',
                cursor: 'pointer',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
