'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, Phone, ShoppingCart, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky-top glass-header">
      {/* Top Emergency & Helpline Bar */}
      <div className="top-emergency-bar py-1 px-3 text-white">
        <div className="container d-flex justify-content-between align-items-center text-xs">
          <div className="d-flex align-items-center gap-2 small">
            <ShieldCheck size={16} className="text-warning" />
            <span className="fw-medium">Certified Industrial & Commercial Gas Suppliers</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <a href="tel:+919876543210" className="text-white text-decoration-none fw-semibold small d-flex align-items-center gap-1">
              <Phone size={14} />
              <span>Emergency Helpline: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark py-2">
        <div className="container">
          {/* Brand Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none">
            <div
              className="d-flex align-items-center justify-content-center rounded-3 bg-danger text-white shadow"
              style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #dc2626, #ea580c)' }}
            >
              <Flame size={24} />
            </div>
            <div className="lh-1">
              <span className="fw-black fs-4 text-white tracking-tight">
                ESE<span className="text-danger">GAS</span>
              </span>
              <small className="d-block text-secondary font-monospace uppercase text-uppercase" style={{ fontSize: '0.65rem' }}>
                Industrial & Medical Gases
              </small>
            </div>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="navbar-toggler border-0 p-2 text-white"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Nav Links */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-center">
            <ul className="navbar-nav gap-4 fw-semibold text-sm">
              <li className="nav-item">
                <Link href="/" className="nav-link active text-danger">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link text-light">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#products" className="nav-link text-light">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link text-light">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <button className="btn btn-outline-secondary border-0 position-relative p-2 text-light rounded-circle">
              <ShoppingCart size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem' }}>
                0
              </span>
            </button>
            <a href="#quote" className="btn btn-brand-primary btn-sm">
              Get Quick Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="d-lg-none glass-card m-2 p-4 d-flex flex-column gap-3">
          <ul className="nav flex-column gap-3 fw-semibold">
            <li className="nav-item">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="nav-link text-danger">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link text-light">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="nav-link text-light">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link text-light">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
          <div className="pt-3 border-top border-secondary mt-3">
            <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="btn btn-brand-primary w-100">
              Get Quick Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
