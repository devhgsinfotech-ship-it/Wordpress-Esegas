'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Mail, MessageCircle, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  logoUrl?: string;
}

export default function Navbar({ logoUrl = 'http://localhost:8090/wp-content/uploads/2024/02/logo-3.png' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLang, setSelectedLang] = useState('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <div className="container-fluid px-lg-5 py-3 py-lg-4">
        <div className="row align-items-center">
          
          {/* 1. Brand Logo (Max height 120px) */}
          <div className="col-6 col-lg-3">
            <Link href="/" className="d-inline-flex align-items-center gap-2 text-decoration-none">
              <img
                src={logoUrl}
                alt="ESE GAS Logo"
                style={{ maxHeight: '120px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="col-6 d-lg-none text-end">
            <button
              className="btn btn-light border-0 p-2"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={28} className="text-dark" /> : <Menu size={28} className="text-dark" />}
            </button>
          </div>

          {/* 2. Navigation Links (Center Desktop) */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <ul className="nav align-items-center gap-4 fw-bold text-dark" style={{ fontSize: '1.02rem' }}>
              <li className="nav-item">
                <Link href="/" className="nav-link px-0 text-dark active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link px-0 text-dark">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/product" className="nav-link px-0 text-dark d-flex align-items-center gap-1">
                  Product <ChevronDown size={14} className="text-muted" />
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a href="#services" className="nav-link px-0 text-dark d-flex align-items-center gap-1">
                  Application <ChevronDown size={14} className="text-muted" />
                </a>
              </li>
              <li className="nav-item">
                <Link href="#blog" className="nav-link px-0 text-dark">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#news" className="nav-link px-0 text-dark">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link px-0 text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Right Utility Bar (Sleek Search, Language Dropdown & Contact info) */}
          <div className="col-lg-3 d-none d-lg-flex flex-column align-items-end gap-3">
            
            {/* A. Search Bar */}
            <div className="w-100 d-flex justify-content-end">
              <div className="input-group input-group-sm rounded-2 overflow-hidden border" style={{ maxWidth: '260px' }}>
                <input
                  type="text"
                  className="form-control bg-light border-0 px-3 shadow-none text-dark"
                  placeholder="Type to start searching..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ fontSize: '0.85rem' }}
                />
                <button
                  className="btn border-0 px-3 d-flex align-items-center justify-content-center"
                  type="button"
                  style={{ backgroundColor: '#ffb700' }}
                >
                  <Search size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* B. Language Dropdown */}
            <div className="position-relative">
              <button
                className="btn btn-sm btn-white border d-flex align-items-center gap-2 px-3 py-1 rounded-2 shadow-sm"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}
              >
                <span>{languages.find(l => l.name === selectedLang)?.flag || '🇬🇧'}</span>
                <span>{selectedLang}</span>
                <ChevronDown size={13} className="text-muted" />
              </button>

              {langDropdownOpen && (
                <div
                  className="position-absolute end-0 top-100 mt-1 bg-white border rounded-2 shadow-lg py-1 z-3"
                  style={{ minWidth: '150px' }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="dropdown-item d-flex align-items-center gap-2 px-3 py-1.5 text-start w-100 border-0 bg-transparent"
                      style={{ fontSize: '0.82rem' }}
                      onClick={() => {
                        setSelectedLang(lang.name);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* C. Email & WhatsApp */}
            <div className="d-flex align-items-center gap-2 text-decoration-none" style={{ fontSize: '0.85rem' }}>
              <a href="mailto:info@esegas.com" className="text-decoration-none text-secondary d-flex align-items-center gap-1.5 hover-primary font-weight-medium">
                <Mail size={15} style={{ color: '#2b90d9' }} />
                <span className="text-secondary fw-semibold">info@esegas.com</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-success text-decoration-none d-flex align-items-center">
                <MessageCircle size={17} fill="#25D366" className="text-white ms-1" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="d-lg-none bg-light p-4 border-top">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control bg-white border px-3"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn" type="button" style={{ backgroundColor: '#ffb700' }}>
              <Search size={16} className="text-white" />
            </button>
          </div>

          <ul className="nav flex-column gap-2 fw-bold text-dark">
            <li className="nav-item">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#products" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                Application
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#blog" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#news" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                Contact
              </Link>
            </li>
          </ul>

          <div className="pt-3 border-top mt-3 d-flex justify-content-between align-items-center text-sm">
            <a href="mailto:info@esegas.com" className="text-decoration-none text-secondary d-flex align-items-center gap-1">
              <Mail size={14} style={{ color: '#2b90d9' }} />
              <span>info@esegas.com</span>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-success">
              <MessageCircle size={18} fill="#25D366" className="text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
