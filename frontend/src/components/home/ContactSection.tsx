'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-5 position-relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 20, 36, 0.85), rgba(13, 20, 36, 0.85)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container py-4">
        <div className="row align-items-center g-4">
          {/* Left Column: Contact Text */}
          <div className="col-lg-5">
            <h2 className="fw-bold mb-3 text-white" style={{ fontSize: '2rem' }}>
              Contact Us
            </h2>
            <p className="text-light lh-lg mb-4" style={{ fontSize: '0.92rem', opacity: 0.9 }}>
              Have questions about our gas analyzers, Continuous Emission Monitoring Systems (CEMS), or custom process engineering? Send us a message and our technical team will respond within 24 hours.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="col-lg-7">
            {submitted ? (
              <div className="alert alert-warning text-dark font-weight-bold p-4 text-center">
                Thank you! Your inquiry has been sent. Our gas analysis engineering team will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control bg-white text-dark border-0 p-3 shadow-sm rounded-1"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control bg-white text-dark border-0 p-3 shadow-sm rounded-1"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    rows={4}
                    className="form-control bg-white text-dark border-0 p-3 shadow-sm rounded-1"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn fw-bold w-100 py-3 text-uppercase text-dark"
                    style={{
                      backgroundColor: '#ffb700',
                      borderRadius: '2px',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                    }}
                  >
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
