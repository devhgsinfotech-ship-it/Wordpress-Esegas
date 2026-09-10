import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import ContactSection from '@/components/home/ContactSection';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#162238',
        color: '#c0c9d6',
        fontSize: '0.81rem',
        lineHeight: '1.5',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      {/* 1. Integrated Industrial Contact Us Form Section */}
      <ContactSection />
      {/* Main Footer Container */}
      <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5">
        <div className="row g-4 justify-content-between">

          {/* Column 1: Address & Contact Details */}
          <div className="col-12 col-md-4 col-lg-3 pe-lg-3">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: '0.92rem', letterSpacing: '0.3px' }}>
              Address
            </h6>

            <p className="mb-2 text-white-50" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>
              The 4th floor, No.28, Fozuling Road, East lake Hi-Tech Development Zone, Wuhan 430000, China
            </p>
            <p className="mb-3 text-white-50" style={{ fontSize: '0.8rem' }}>
              Tel:<span style={{ color: '#ffc107', fontWeight: 600 }}> 0086-15071131907</span>
            </p>

            <p className="mb-2 text-white-50" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>
              Building 12, Tangcheng Industrial Park, Nanjing, China
            </p>
            <p className="mb-3 text-white-50" style={{ fontSize: '0.8rem' }}>
              Tel: <span className="text-white-50">0086-15251746986</span>
            </p>

            <p className="mb-4 text-white-50" style={{ fontSize: '0.8rem' }}>
              E-mail:<span className="text-white-50">info@esegas.com</span>
            </p>

            {/* Bright Yellow Contact Us Button */}
            <div className="mb-4">
              <a
                href="#contact"
                className="btn fw-bold text-dark text-uppercase px-3 py-1.5 border-0"
                style={{
                  backgroundColor: '#ffc107',
                  fontSize: '0.82rem',
                  borderRadius: '2px',
                  letterSpacing: '0.3px',
                  display: 'inline-block',
                }}
              >
                Contact Us !
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="d-flex align-items-center gap-3 text-white-50">
              <a href="#facebook" className="text-white-50 text-decoration-none opacity-75 hover-opacity-100" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#twitter" className="text-white-50 text-decoration-none opacity-75 hover-opacity-100" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#youtube" className="text-white-50 text-decoration-none opacity-75 hover-opacity-100" aria-label="YouTube">
                <Youtube size={16} />
              </a>
              <a href="#linkedin" className="text-white-50 text-decoration-none opacity-75 hover-opacity-100" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Products (3 Sub-Columns Grid) */}
          <div className="col-12 col-md-8 col-lg-7">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: '0.92rem', letterSpacing: '0.3px' }}>
              Products
            </h6>

            <div className="row g-2 g-lg-3">
              {/* Products Sub-Column 1 */}
              <div className="col-12 col-sm-4">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1 text-white-50" style={{ fontSize: '0.78rem' }}>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Flue Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Syngas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">TDL Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">FTIR Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">NDIR Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Process Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Hydrogen Analyzer</Link></li>
                  <li className="mt-2"><Link href="/product" className="text-white-50 text-decoration-none hover-white">Gas Conditioning System Accessories</Link></li>
                </ul>
              </div>

              {/* Products Sub-Column 2 */}
              <div className="col-12 col-sm-4">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1 text-white-50" style={{ fontSize: '0.78rem' }}>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Portable Flue Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Portable Syngas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Portable TDL Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Portable FTIR Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Greenhouse Gas Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Oxygen Analyzer</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Zirconia Oxygen Analyzer</Link></li>
                  <li className="mt-2"><Link href="/product" className="text-white-50 text-decoration-none hover-white">Air Quality Monitoring System (AQMS)</Link></li>
                </ul>
              </div>

              {/* Products Sub-Column 3 */}
              <div className="col-12 col-sm-4">
                <ul className="list-unstyled mb-0 d-flex flex-column gap-1 text-white-50" style={{ fontSize: '0.78rem' }}>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Mercury CEMS</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">VOC CEMS</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">TDL Online Gas Analysis System</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">FTIR CEMS</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Gas Sensor Module</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Ultrasonic Flow Meter</Link></li>
                  <li><Link href="/product" className="text-white-50 text-decoration-none hover-white">Dust Monitor</Link></li>
                  <li className="lh-sm"><Link href="/product" className="text-white-50 text-decoration-none hover-white">Continuous Emission Monitoring System (CEMS)</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Links */}
          <div className="col-12 col-md-4 col-lg-1 ps-lg-2">
            <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: '0.92rem', letterSpacing: '0.3px' }}>
              Links
            </h6>

            <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <li>
                <Link href="/" className="text-decoration-none fw-bold" style={{ color: '#ffc107' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white-50 text-decoration-none hover-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-white-50 text-decoration-none hover-white">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-white-50 text-decoration-none hover-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-white-50 text-decoration-none hover-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white-50 text-decoration-none hover-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sub-Footer / Copyright Divider Bar */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', backgroundColor: '#131b2e' }} className="py-3">
        <div className="container-fluid px-3 px-sm-4 px-lg-5 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-white-50" style={{ fontSize: '0.78rem' }}>
          <div>
            Copyright © 2023 esegas.com. All rights reserved.
          </div>
          <div className="d-flex gap-4">
            <span style={{ cursor: 'pointer' }} className="hover-white">Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} className="hover-white">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
