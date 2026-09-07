'use client';

import React from 'react';

interface HeroProps {
  bannerImage?: string;
}

export default function Hero({ bannerImage = 'https://esegas.com/wp-content/uploads/2025/02/Gas-Analyzer-Manufacturer.webp' }: HeroProps) {
  return (
    <section className="position-relative overflow-hidden" style={{ minHeight: '680px', backgroundColor: '#0b0f19' }}>
      {/* Slow Zooming Background Container */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div
          className="w-100 h-100 hero-zoom-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 20, 36, 0.5), rgba(13, 20, 36, 0.5)), url('${bannerImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
      </div>

      {/* Content Overlay with Taller Height */}
      <div className="container position-relative z-2 py-5 d-flex align-items-center" style={{ minHeight: '680px' }}>
        <div className="row w-100">
          <div className="col-lg-9 col-xl-8 text-white">
            {/* Headline matching screenshot */}
            <h1
              className="fw-black text-white text-uppercase mb-4"
              style={{
                fontSize: '3.4rem',
                lineHeight: '1.1',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 900,
                letterSpacing: '0.5px',
              }}
            >
              GAS ANALYZER<br />MANUFACTURER
            </h1>

            {/* Subtitle matching screenshot */}
            <p
              className="text-light mb-5 font-normal"
              style={{
                fontSize: '1.18rem',
                lineHeight: '1.6',
                opacity: 0.94,
                maxWidth: '660px',
              }}
            >
              We develops and produces gas analyzer and gas analysis systems for applications ranging from process gases and environmental emissions monitoring
            </p>

            {/* Pill Yellow Contact Us Button */}
            <div>
              <a
                href="#contact"
                className="btn text-white fw-bold px-4 py-2.5 shadow transition-transform transform-hover"
                style={{
                  backgroundColor: '#d49b17',
                  borderRadius: '50rem',
                  fontSize: '0.98rem',
                  letterSpacing: '0.3px',
                  paddingLeft: '2.2rem',
                  paddingRight: '2.2rem',
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
