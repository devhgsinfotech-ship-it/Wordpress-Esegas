'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Mail, MessageCircle, Menu, X } from 'lucide-react';

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
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  // Initialize selected language label from existing cookie on mount
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const cookies = document.cookie.split(';');
    const googCookie = cookies.find(c => c.trim().startsWith('googtrans='));
    if (googCookie) {
      const parts = googCookie.split('=')[1]?.split('/');
      const code = parts ? parts[parts.length - 1] : '';
      const matched = languages.find(l => l.code === code);
      if (matched) {
        setSelectedLang(matched.name);
      }
    }
  }, []);

  // Dynamic language switcher function with full Arabic & native name support
  const changeLanguage = (langCode: string, langName: string) => {
    setSelectedLang(langName);
    setLangDropdownOpen(false);

    if (typeof window === 'undefined') return;

    const hostname = window.location.hostname;

    // Clear old cookies across paths and domains
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;

    if (langCode !== 'en') {
      const transVal = `/auto/${langCode}`;
      document.cookie = `googtrans=${transVal}; path=/;`;
      document.cookie = `googtrans=${transVal}; path=/; domain=${hostname};`;
      
      const transEnVal = `/en/${langCode}`;
      document.cookie = `googtrans=${transEnVal}; path=/;`;
      document.cookie = `googtrans=${transEnVal}; path=/; domain=${hostname};`;
    }

    // Dispatch change event to Google Translate combo box if mounted
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change'));
    }

    // Force reload to apply full-page translation (essential for Arabic RTL)
    window.location.reload();
  };

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <div className="container-fluid px-lg-5 py-3 py-lg-4">
        <div className="row align-items-center">
          
          {/* 1. Brand Logo */}
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
            <ul className="nav align-items-center gap-4 fw-bold text-dark list-unstyled mb-0" style={{ fontSize: '1.02rem', listStyle: 'none', paddingLeft: 0 }}>
              <li className="nav-item">
                <Link href="/" className="nav-link px-0 text-dark active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link px-0 text-dark">
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

            {/* B. Dynamic Language Dropdown (Enforced Native Language Display with notranslate) */}
            <div className="position-relative notranslate">
              <button
                className="btn btn-sm btn-white border d-flex align-items-center gap-2 px-3 py-1 rounded-2 shadow-sm notranslate"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}
              >
                <span className="notranslate">{languages.find(l => l.name === selectedLang)?.flag || '🇬🇧'}</span>
                <span className="notranslate">{selectedLang}</span>
                <ChevronDown size={13} className="text-muted" />
              </button>

              {langDropdownOpen && (
                <div
                  className="position-absolute end-0 top-100 mt-1 bg-white border rounded-2 shadow-lg py-1 z-3 notranslate"
                  style={{ minWidth: '150px' }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="dropdown-item d-flex align-items-center gap-2 px-3 py-1.5 text-start w-100 border-0 bg-transparent notranslate"
                      style={{ fontSize: '0.82rem' }}
                      onClick={() => changeLanguage(lang.code, lang.name)}
                    >
                      <span className="notranslate">{lang.flag}</span>
                      <span className="notranslate">{lang.name}</span>
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

          <ul className="nav flex-column gap-2 fw-bold text-dark list-unstyled mb-0" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li className="nav-item">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/product" onClick={() => setMobileMenuOpen(false)} className="nav-link text-dark">
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

          {/* Mobile Language Selector (Enforced Native Language Display with notranslate) */}
          <div className="pt-3 border-top mt-3 notranslate">
            <label className="form-label text-muted small fw-semibold mb-1 notranslate">Select Language</label>
            <div className="d-flex flex-wrap gap-2 notranslate">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`btn btn-sm notranslate ${selectedLang === lang.name ? 'btn-warning text-dark' : 'btn-outline-secondary'}`}
                  onClick={() => {
                    changeLanguage(lang.code, lang.name);
                    setMobileMenuOpen(false);
                  }}
                  style={{ fontSize: '0.78rem' }}
                >
                  <span className="notranslate">{lang.flag}</span> <span className="notranslate">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

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
