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
        backgroundImage: `linear-gradient(rgba(22, 34, 56, 0.88), rgba(22, 34, 56, 0.88)), url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      <div className="container py-3 py-md-4">
        <div className="row g-4 justify-content-between align-items-start">
          
          {/* Left Column: Contact Us Info */}
          <div className="col-12 col-lg-5 pe-lg-4">
            <h2 className="fw-bold mb-3 text-white" style={{ fontSize: '2.2rem' }}>
              Contact Us
            </h2>
            <p className="text-white-50 mb-4 lh-base" style={{ fontSize: '0.88rem', maxWidth: '440px' }}>
              Enviro Solutions Technology Co., Ltd (ESE Technology) is a gas analyzer manufacturer and leading provider in ODM/OEM services for gas analysis systems used by international famous brands.
            </p>
            <div>
              <a
                href="#contact"
                className="btn fw-bold text-dark text-uppercase px-4 py-2 border-0"
                style={{
                  backgroundColor: '#ffc107',
                  fontSize: '0.85rem',
                  borderRadius: '3px',
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Leave us a message Form */}
          <div className="col-12 col-lg-6">
            <h5 className="fw-bold mb-3" style={{ color: '#ffc107', fontSize: '1.05rem' }}>
              Leave us a message!
            </h5>

            {submitted ? (
              <div className="alert alert-warning text-dark fw-bold p-3 text-center rounded-1">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="row g-3">
                {/* Name & Email Row */}
                <div className="col-12 col-md-6">
                  <label className="form-label text-white small fw-medium mb-1" style={{ fontSize: '0.82rem' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control text-dark border-0 p-2.5 shadow-sm rounded-1"
                    style={{ backgroundColor: '#dce1e8', fontSize: '0.85rem' }}
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label text-white small fw-medium mb-1" style={{ fontSize: '0.82rem' }}>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control text-dark border-0 p-2.5 shadow-sm rounded-1"
                    style={{ backgroundColor: '#dce1e8', fontSize: '0.85rem' }}
                    placeholder="Your Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Description / Message Textarea */}
                <div className="col-12">
                  <label className="form-label text-white small fw-medium mb-1" style={{ fontSize: '0.82rem' }}>
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="form-control text-dark border-0 p-2.5 shadow-sm rounded-1"
                    style={{ backgroundColor: '#dce1e8', fontSize: '0.85rem' }}
                    placeholder="Enter Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <div className="col-12 mt-3">
                  <button
                    type="submit"
                    className="btn fw-bold w-100 py-2.5 text-dark border-0"
                    style={{
                      backgroundColor: '#ffc107',
                      borderRadius: '3px',
                      fontSize: '0.9rem',
                      letterSpacing: '0.3px',
                    }}
                  >
                    Submit
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
