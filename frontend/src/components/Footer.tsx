import React from 'react';
import Link from 'next/link';
import { Flame, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark border-top border-secondary text-secondary py-5">
      <div className="container">
        <div className="row g-4">
          
          {/* Brand Info */}
          <div className="col-lg-4">
            <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-danger text-white shadow"
                style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #dc2626, #ea580c)' }}
              >
                <Flame size={22} />
              </div>
              <span className="fw-black fs-4 text-white">
                ESE<span className="text-danger">GAS</span>
              </span>
            </Link>

            <p className="text-secondary small mb-3">
              Leading provider of industrial, commercial, medical, and specialty gas supplies, cylinder refills, and custom gas pipeline engineering.
            </p>

            <div className="d-flex align-items-center gap-2 text-success small">
              <ShieldCheck size={18} />
              <span>ISO 9001:2015 & PESO Certified Supplier</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link href="/" className="text-secondary text-decoration-none hover-white">Home Page</Link></li>
              <li><Link href="#services" className="text-secondary text-decoration-none hover-white">Gas Services</Link></li>
              <li><Link href="#products" className="text-secondary text-decoration-none hover-white">Cylinder Catalog</Link></li>
              <li><Link href="#about" className="text-secondary text-decoration-none hover-white">About ESEGAS</Link></li>
              <li><Link href="#contact" className="text-secondary text-decoration-none hover-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Offerings */}
          <div className="col-6 col-lg-3">
            <h6 className="text-white fw-bold mb-3">Gas Products</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><span className="text-secondary">Industrial Oxygen (O₂)</span></li>
              <li><span className="text-secondary">Commercial LPG Cylinders</span></li>
              <li><span className="text-secondary">High Purity Argon (Ar)</span></li>
              <li><span className="text-secondary">Medical Grade Oxygen</span></li>
              <li><span className="text-secondary">Dissolved Acetylene (DA)</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3">
            <h6 className="text-white fw-bold mb-3">Contact & Support</h6>
            <div className="d-flex flex-column gap-2 small">
              <div className="d-flex align-items-start gap-2">
                <MapPin size={16} className="text-danger flex-shrink-0 mt-1" />
                <span>Industrial Area Phase II, Commercial Gas Depot, India</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} className="text-danger flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white fw-bold text-decoration-none">+91 98765 43210</a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Mail size={16} className="text-danger flex-shrink-0" />
                <a href="mailto:info@esegas.com" className="text-secondary text-decoration-none">info@esegas.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-5 pt-4 border-top border-secondary d-flex flex-column flex-sm-row justify-content-between text-muted small gap-3">
          <p className="mb-0">© {new Date().getFullYear()} ESEGAS. All rights reserved. Headless Next.js + WordPress/WooCommerce Architecture.</p>
          <div className="d-flex gap-4">
            <span className="text-secondary">Privacy Policy</span>
            <span className="text-secondary">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
