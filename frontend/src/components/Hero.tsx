import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Zap, PhoneCall, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="position-relative py-5 overflow-hidden">
      <div className="ambient-glow" />

      <div className="container position-relative z-1 py-4">
        <div className="row align-items-center g-5">
          
          {/* Left Column: Headline & Hero Content */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="pill-badge mb-4">
              <Sparkles size={16} className="text-warning" />
              <span>Next-Gen High-Purity Gas Delivery</span>
            </div>

            <h1 className="display-4 fw-black text-white tracking-tight mb-3">
              Reliable <span className="gradient-text">Industrial & Commercial</span> Gas Supplies
            </h1>

            <p className="lead text-secondary mb-4 font-light">
              We engineer, supply, and deliver high-purity medical oxygen, industrial LPG, specialty gas mixtures, and turnkey piping systems for industrial and commercial operations.
            </p>

            {/* CTAs */}
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-3 mb-5">
              <a href="#products" className="btn btn-brand-primary btn-lg d-flex align-items-center gap-2">
                <span>Browse Gas Catalog</span>
                <ArrowRight size={20} />
              </a>

              <a href="tel:+919876543210" className="btn btn-brand-outline btn-lg d-flex align-items-center gap-2">
                <PhoneCall size={18} className="text-warning" />
                <span>Request Call Back</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-top border-secondary-subtle row g-3 text-start">
              <div className="col-4">
                <div className="d-flex align-items-center gap-2">
                  <ShieldCheck size={24} className="text-danger flex-shrink-0" />
                  <div>
                    <h6 className="text-white mb-0 fw-bold small">ISO Certified</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>100% Purity Tested</small>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="d-flex align-items-center gap-2">
                  <Truck size={24} className="text-warning flex-shrink-0" />
                  <div>
                    <h6 className="text-white mb-0 fw-bold small">24/7 Logistics</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>On-Demand Refills</small>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="d-flex align-items-center gap-2">
                  <Zap size={24} className="text-danger flex-shrink-0" />
                  <div>
                    <h6 className="text-white mb-0 fw-bold small">Turnkey Systems</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Piping & Testing</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Stock Preview Card */}
          <div className="col-lg-5">
            <div className="glass-card p-4 shadow-lg border-secondary">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-2 uppercase">
                  Live Stock Status
                </span>
                <span className="small text-success fw-bold d-flex align-items-center gap-1">
                  <span className="spinner-grow spinner-grow-sm text-success" role="status" style={{ width: '0.5rem', height: '0.5rem' }} />
                  Ready for Dispatch
                </span>
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="p-3 rounded-3 bg-dark border border-secondary d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-danger bg-opacity-25 text-danger fw-bold fs-5 d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                      O₂
                    </div>
                    <div>
                      <h6 className="text-white mb-0 fw-bold small">Medical Oxygen Cylinder</h6>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>Purity 99.99% • 47L Capacity</small>
                    </div>
                  </div>
                  <span className="badge bg-warning text-dark fw-bold">In Stock</span>
                </div>

                <div className="p-3 rounded-3 bg-dark border border-secondary d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-warning bg-opacity-25 text-warning fw-bold fs-5 d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                      LPG
                    </div>
                    <div>
                      <h6 className="text-white mb-0 fw-bold small">Commercial LPG Cylinder</h6>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>19kg & 47.5kg Industrial</small>
                    </div>
                  </div>
                  <span className="badge bg-warning text-dark fw-bold">In Stock</span>
                </div>

                <div className="p-3 rounded-3 bg-dark border border-secondary d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-info bg-opacity-25 text-info fw-bold fs-5 d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                      Ar
                    </div>
                    <div>
                      <h6 className="text-white mb-0 fw-bold small">Argon Shielding Gas</h6>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>High Purity Welding Grade</small>
                    </div>
                  </div>
                  <span className="badge bg-warning text-dark fw-bold">In Stock</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-secondary d-flex justify-content-between text-muted small">
                <span>500+ Manufacturing Plants</span>
                <span className="text-white fw-bold">24h Express Refill</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
