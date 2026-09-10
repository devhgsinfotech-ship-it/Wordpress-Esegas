'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'rd' | 'mfg' | 'workshop'>('rd');
  const [yearCount, setYearCount] = useState<number>(0);

  // Speed counter animation for 2008 Established year badge
  useEffect(() => {
    const target = 2008;
    const duration = 1600; // 1.6 seconds
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out quad curve for speed counting effect
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easeProgress * target);
      
      setYearCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      
      {/* 1. Hero Banner Header */}
      <section
        className="py-5 text-white text-center"
        style={{
          backgroundColor: '#004d5a',
        }}
      >
        <div className="container py-3">
          <h1 className="fw-bold text-white mb-2" style={{ fontSize: '2.2rem', letterSpacing: '-0.5px' }}>
            About ESEGAS Technology
          </h1>
          <nav className="d-flex justify-content-center">
            <ol className="breadcrumb mb-0" style={{ fontSize: '0.88rem' }}>
              <li className="breadcrumb-item">
                <Link href="/" className="text-white-50 text-decoration-none hover-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-white fw-semibold">
                About us
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 2. Section 1: About us */}
      <section className="py-5">
        <div className="container py-2">
          <div className="row g-4 justify-content-between align-items-start">
            
            {/* Left Column: Text Content */}
            <div className="col-12 col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: '#004d5a', fontSize: '2rem' }}>
                About us
              </h2>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '0.86rem', color: '#475569' }}>
                ESEGAS is a leading developer and manufacturer of gas analysis equipment. As a unit of ESEGAS group, we focus on providing high accuracy online gas analyzer, portable gas analyzer, Continuous Emission Monitoring Systems (CEMS) and Air Quality Monitoring System (AQMS), serving customers across the power, chemical, metallurgical, environmental, and research sectors.
              </p>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '0.86rem', color: '#475569' }}>
                <strong>Why Choose ESEGAS Technology?</strong> Our mission is to empower industries with precise gas analysis solutions. We combined state-of-the-art optical and sensor technology with robust engineering to optimize your industrial operational goals. Additionally, our customized ODM/OEM services offer custom performance to fit unique detection needs in harsh industrial environments.
              </p>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '0.86rem', color: '#475569' }}>
                <strong>Industrial Applications:</strong> ESEGAS products are deployed across diverse industries worldwide: Power Generation & Utilities, Chemical & Petrochemical, Metallurgical & Steel Production, Environmental & AQMS, Research & Educational Institutions.
              </p>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '0.86rem', color: '#475569' }}>
                <strong>Emerging Technologies & Gas Solutions:</strong> ESEGAS actively invests in advanced TDLAS, FTIR, NDIR, UV-DOAS, and Electrochemical gas detection. We maintain strategic alliances with global sensor manufacturers to achieve technological leadership.
              </p>

              {/* Key Bullet List */}
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2 pt-2 text-secondary" style={{ fontSize: '0.85rem' }}>
                <li className="d-flex align-items-center gap-2">
                  <span className="rounded-circle bg-warning flex-shrink-0" style={{ width: '8px', height: '8px' }} />
                  <span>Company Footprint: 20,000+ sq. m production & R&D facility.</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="rounded-circle bg-warning flex-shrink-0" style={{ width: '8px', height: '8px' }} />
                  <span>Global Footprint: Operating in over 50+ countries worldwide.</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="rounded-circle bg-warning flex-shrink-0" style={{ width: '8px', height: '8px' }} />
                  <span>Over 100+ patents and ISO certifications.</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="rounded-circle bg-warning flex-shrink-0" style={{ width: '8px', height: '8px' }} />
                  <span>Over 15+ years of dedicated gas analysis experience.</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="rounded-circle bg-warning flex-shrink-0" style={{ width: '8px', height: '8px' }} />
                  <span>Serving 1000+ industrial enterprise clients.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Images & Green 2008 Badge with Speed Counter */}
            <div className="col-12 col-lg-5">
              {/* Top Building Image with Animated 2008 Speed Counter Badge */}
              <div className="position-relative mb-4 rounded overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                  alt="ESEGAS Factory Building"
                  className="img-fluid w-100 object-fit-cover d-block"
                  style={{ height: '240px' }}
                />
                <div
                  className="position-absolute top-0 end-0 text-white px-3 py-2 fw-bold text-center shadow-lg"
                  style={{
                    backgroundColor: '#22c55e',
                    borderRadius: '0 0 0 10px',
                    minWidth: '105px',
                    zIndex: 2,
                  }}
                >
                  <div className="fs-3 fw-extrabold lh-1 font-monospace" style={{ letterSpacing: '-0.5px' }}>
                    {yearCount || 2008}
                  </div>
                  <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
                    Established Since
                  </div>
                </div>
              </div>

              {/* Bottom Image: Certificates Grid */}
              <div className="p-3 bg-light rounded text-center shadow-sm">
                <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '0.88rem' }}>
                  ISO & Patent Qualification Certificates
                </h6>
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
                  alt="ISO Certificates"
                  className="img-fluid rounded object-fit-cover w-100 d-block"
                  style={{ height: '160px' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Section 2: Factory Environment */}
      <section className="py-5 bg-light">
        <div className="container py-2">
          <div className="row g-4 justify-content-between align-items-center">
            
            {/* Left Column: Text */}
            <div className="col-12 col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: '#004d5a', fontSize: '2rem' }}>
                Factory Environment
              </h2>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '0.86rem', color: '#475569' }}>
                ESEGAS Technology operates state-of-the-art production and testing facilities equipped with modern SMT assembly lines, gas calibration chambers, high-precision optical alignment benches, and environmental aging chambers. Every gas analyzer undergoes rigorous zero-drift, span calibration, temperature compensation, and vibration testing prior to delivery.
              </p>
              <p className="text-secondary lh-base mb-0" style={{ fontSize: '0.86rem', color: '#475569' }}>
                Our manufacturing team adheres to strict ISO9001 quality control processes, ensuring every instrument delivers long-term stability and reliable performance in severe industrial operating conditions.
              </p>
            </div>

            {/* Right Column: 4-Grid Photo Gallery */}
            <div className="col-12 col-lg-5">
              <div className="row g-2">
                <div className="col-6">
                  <div className="overflow-hidden rounded shadow-sm" style={{ height: '120px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop"
                      alt="Factory Reception"
                      className="img-fluid w-100 h-100 object-fit-cover d-block"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="overflow-hidden rounded shadow-sm" style={{ height: '120px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=400&auto=format&fit=crop"
                      alt="Cleanroom Optical Lab"
                      className="img-fluid w-100 h-100 object-fit-cover d-block"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="overflow-hidden rounded shadow-sm" style={{ height: '120px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=400&auto=format&fit=crop"
                      alt="Testing & Calibration Benches"
                      className="img-fluid w-100 h-100 object-fit-cover d-block"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="overflow-hidden rounded shadow-sm" style={{ height: '120px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop"
                      alt="CEMS Assembly Line"
                      className="img-fluid w-100 h-100 object-fit-cover d-block"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Section 3: Professional Technical Team */}
      <section className="py-5">
        <div className="container py-2">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="fw-bold mb-3" style={{ color: '#004d5a', fontSize: '2rem' }}>
              Professional Technical Team
            </h2>
            <p className="text-secondary lh-base mb-3 mx-auto" style={{ fontSize: '0.86rem', color: '#475569', maxWidth: '800px' }}>
              Our team of senior optical engineers, electronic designers, software developers, and application specialists bring decades of experience in gas analysis technology. We offer turnkey engineering, custom cabinet design, gas sampling system integration, and on-site commissioning support.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4 text-secondary small fw-medium">
              <span>✓ Factory-direct technical consultation & training</span>
              <span>✓ 24/7 online technical support & global field service team</span>
            </div>
          </div>

          {/* 3-Photo Row */}
          <div className="row g-3 mb-4 justify-content-center">
            <div className="col-12 col-md-4">
              <div className="rounded overflow-hidden shadow-sm" style={{ height: '160px' }}>
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop"
                  alt="Engineer Field Testing"
                  className="img-fluid w-100 h-100 object-fit-cover d-block"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="rounded overflow-hidden shadow-sm" style={{ height: '160px' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
                  alt="Technical Team Group"
                  className="img-fluid w-100 h-100 object-fit-cover d-block"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="rounded overflow-hidden shadow-sm" style={{ height: '160px' }}>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop"
                  alt="R&D Optical Benches"
                  className="img-fluid w-100 h-100 object-fit-cover d-block"
                />
              </div>
            </div>
          </div>

          {/* 3 Interactive Tabs (R&D, Manufacturing, Workshop) */}
          <div className="rounded overflow-hidden shadow-sm mt-4">
            <div className="d-flex" style={{ backgroundColor: '#004d5a' }}>
              <button
                onClick={() => setActiveTab('rd')}
                className={`btn flex-fill py-2.5 fw-bold rounded-0 border-0 ${activeTab === 'rd' ? 'bg-warning text-dark' : 'text-white'}`}
                style={{ fontSize: '0.88rem' }}
              >
                R&D
              </button>
              <button
                onClick={() => setActiveTab('mfg')}
                className={`btn flex-fill py-2.5 fw-bold rounded-0 border-0 ${activeTab === 'mfg' ? 'bg-warning text-dark' : 'text-white'}`}
                style={{ fontSize: '0.88rem' }}
              >
                Manufacturing
              </button>
              <button
                onClick={() => setActiveTab('workshop')}
                className={`btn flex-fill py-2.5 fw-bold rounded-0 border-0 ${activeTab === 'workshop' ? 'bg-warning text-dark' : 'text-white'}`}
                style={{ fontSize: '0.88rem' }}
              >
                Workshop
              </button>
            </div>

            <div className="p-4 bg-white">
              {activeTab === 'rd' && (
                <p className="text-secondary mb-0 lh-base" style={{ fontSize: '0.86rem' }}>
                  Our R&D center is equipped with state-of-the-art optical simulation software, gas chamber test benches, and spectral analysis systems to pioneer next-generation TDLAS, FTIR, and NDIR gas detection technologies.
                </p>
              )}
              {activeTab === 'mfg' && (
                <p className="text-secondary mb-0 lh-base" style={{ fontSize: '0.86rem' }}>
                  Equipped with automated SMT mounting lines, precision gas mixing stations, and climate-controlled aging chambers for 100% zero-defect production quality and strict ISO9001 compliance.
                </p>
              )}
              {activeTab === 'workshop' && (
                <p className="text-secondary mb-0 lh-base" style={{ fontSize: '0.86rem' }}>
                  Spacious 20,000+ sq. m specialized assembly workshop for turnkey CEMS monitoring cabinets, AQMS shelters, and custom gas conditioning systems.
                </p>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Section 4: Reliable Shipment */}
      <section className="py-5 bg-light">
        <div className="container py-2">
          <div className="row g-4 justify-content-between align-items-center">
            
            {/* Left Column: Text */}
            <div className="col-12 col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: '#004d5a', fontSize: '2rem' }}>
                Reliable Shipment
              </h2>
              <p className="text-secondary lh-base mb-3" style={{ fontSize: '0.86rem', color: '#475569' }}>
                ESEGAS provides robust export packaging and international logistics solutions ensuring your delicate gas analyzers arrive safely at your site anywhere in the world. Every cabinet and instrument is protected with multi-layer shockproof foam, moisture-proof vacuum barriers, and heavy-duty reinforced wooden crates.
              </p>
              <p className="text-secondary lh-base mb-0" style={{ fontSize: '0.86rem', color: '#475569' }}>
                We partner with global express and freight carriers (DHL, FedEx, sea/air logistics) to provide fast, reliable, and insured shipping solutions to over 50+ countries.
              </p>
            </div>

            {/* Right Column: 4-Grid Shipment Photos */}
            <div className="col-12 col-lg-5">
              <div className="row g-2 text-center">
                <div className="col-6">
                  <div className="p-1 bg-white rounded shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop"
                      alt="Container Loading"
                      className="img-fluid rounded object-fit-cover w-100 d-block"
                      style={{ height: '110px' }}
                    />
                    <small className="d-block text-muted mt-1 font-weight-semibold" style={{ fontSize: '0.72rem' }}>
                      Container Loading
                    </small>
                  </div>
                </div>

                <div className="col-6">
                  <div className="p-1 bg-white rounded shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=400&auto=format&fit=crop"
                      alt="Wooden Packaging"
                      className="img-fluid rounded object-fit-cover w-100 d-block"
                      style={{ height: '110px' }}
                    />
                    <small className="d-block text-muted mt-1 font-weight-semibold" style={{ fontSize: '0.72rem' }}>
                      Wooden Packaging
                    </small>
                  </div>
                </div>

                <div className="col-6">
                  <div className="p-1 bg-white rounded shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=400&auto=format&fit=crop"
                      alt="Express Air Shipping"
                      className="img-fluid rounded object-fit-cover w-100 d-block"
                      style={{ height: '110px' }}
                    />
                    <small className="d-block text-muted mt-1 font-weight-semibold" style={{ fontSize: '0.72rem' }}>
                      Express Air Shipping
                    </small>
                  </div>
                </div>

                <div className="col-6">
                  <div className="p-1 bg-white rounded shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=400&auto=format&fit=crop"
                      alt="Ready for Sea Freight"
                      className="img-fluid rounded object-fit-cover w-100 d-block"
                      style={{ height: '110px' }}
                    />
                    <small className="d-block text-muted mt-1 font-weight-semibold" style={{ fontSize: '0.72rem' }}>
                      Ready for Sea Freight
                    </small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Section 5: Our Mission */}
      <section className="py-5">
        <div className="container py-2">
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#004d5a', fontSize: '2rem' }}>
            Our Mission
          </h2>

          <div className="row g-4 justify-content-between align-items-center">
            {/* Left Column: Industrial Plant Image */}
            <div className="col-12 col-lg-5">
              <div className="rounded overflow-hidden shadow-sm" style={{ height: '280px' }}>
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"
                  alt="Industrial Plant Sunset"
                  className="img-fluid w-100 h-100 object-fit-cover d-block"
                />
              </div>
            </div>

            {/* Right Column: 3 Feature Cards */}
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-3">
                
                <div className="p-3 rounded shadow-sm bg-light">
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.92rem' }}>
                    Precise
                  </h6>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                    Ultra-accurate measurement and zero-drift monitoring ensuring regulatory compliance and optimized process control.
                  </p>
                </div>

                <div className="p-3 rounded shadow-sm bg-light">
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.92rem' }}>
                    Safety
                  </h6>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                    Protecting industrial personnel and facilities with continuous toxic and combustible gas leak detection.
                  </p>
                </div>

                <div className="p-3 rounded shadow-sm bg-light">
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.92rem' }}>
                    Environmental
                  </h6>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                    Supporting global decarbonization and emission reduction with continuous CEMS and AQMS monitoring solutions.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
