'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const gasAnalyzers = [
  'Flue Gas Analyzer & Emission Gas Analyzer',
  'Syngas Analyzers',
  'Process Gas analyzer',
  'Industrial Gas Analyzer',
  'Petrochemical Gas Analysis',
  'Portable Gas Analyzer',
  'Trace Gas Analyzer',
  'Continuous Gas Analyzer',
  'Medical Gas Analyzer',
];

const oemModules = [
  'Laser Gas Detection OEM Module',
  'UV DOAS OEM Module',
  'NDIR Gas Sensor Module',
];

export default function AnalyzerPossibilities() {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        {/* Section Title matching screenshot */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2rem', color: '#004b93' }}>
            ESE Gas Analyzer Installation
          </h2>
        </div>

        <div className="row align-items-center g-5">
          {/* Left Column: White Card with Checkmarks & More Products Button */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg p-4 rounded-3 bg-white" style={{ borderLeft: '4px solid #ffb700' }}>
              {/* Section 1: Gas Analyzer */}
              <h5 className="fw-bold mb-3" style={{ color: '#004b93', fontSize: '1.1rem' }}>
                Gas Analyzer
              </h5>
              <ul className="list-unstyled mb-4 space-y-2">
                {gasAnalyzers.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-2 mb-2">
                    <Check size={16} style={{ color: '#ffb700', strokeWidth: 3 }} className="flex-shrink-0" />
                    <span style={{ fontSize: '0.88rem', color: '#475569', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 2: OEM Gas Module */}
              <h5 className="fw-bold mb-3 pt-2 border-top" style={{ color: '#004b93', fontSize: '1.1rem' }}>
                OEM Gas Module
              </h5>
              <ul className="list-unstyled mb-4 space-y-2">
                {oemModules.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-2 mb-2">
                    <Check size={16} style={{ color: '#ffb700', strokeWidth: 3 }} className="flex-shrink-0" />
                    <span style={{ fontSize: '0.88rem', color: '#475569', fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Yellow Button linking to /product */}
              <div>
                <Link
                  href="/product"
                  className="btn fw-bold px-4 py-2 text-dark shadow-sm text-decoration-none"
                  style={{
                    backgroundColor: '#ffb700',
                    borderRadius: '2px',
                    fontSize: '0.9rem',
                  }}
                >
                  More Products
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Installation Photos Grid */}
          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-4">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop"
                  alt="Industrial Stack Installation"
                  className="img-fluid rounded shadow-sm w-100 object-fit-cover"
                  style={{ height: '170px' }}
                />
              </div>
              <div className="col-4">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=500&auto=format&fit=crop"
                  alt="Gas Sensor Piping Mount"
                  className="img-fluid rounded shadow-sm w-100 object-fit-cover"
                  style={{ height: '170px' }}
                />
              </div>
              <div className="col-4">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=500&auto=format&fit=crop"
                  alt="Outdoor Monitoring Shelter"
                  className="img-fluid rounded shadow-sm w-100 object-fit-cover"
                  style={{ height: '170px' }}
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop"
                  alt="Flue Gas Probe Installation"
                  className="img-fluid rounded shadow-sm w-100 object-fit-cover"
                  style={{ height: '220px' }}
                />
              </div>
              <div className="col-6 mt-3">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
                  alt="Technician Inspecting Gas Analyzer Cabinet"
                  className="img-fluid rounded shadow-sm w-100 object-fit-cover"
                  style={{ height: '220px' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
