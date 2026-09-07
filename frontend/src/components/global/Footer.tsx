import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Linkedin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-light" style={{ backgroundColor: '#131e36', fontSize: '0.82rem' }}>
      {/* Main Footer Content */}
      <div className="container-fluid px-lg-5 py-5">
        <div className="row g-4">
          
          {/* Column 1: Address & Contact Details */}
          <div className="col-lg-3 pe-lg-4">
            <h6 className="fw-bold text-white mb-3" style={{ fontSize: '0.95rem' }}>
              Address
            </h6>
            
            <div className="text-secondary lh-sm mb-3">
              <p className="mb-1 text-light" style={{ opacity: 0.85 }}>
                The 4th floor, No.28, Fozuling Road, East-lake Hi-Tech Development Zone, Wuhan 430000, China
              </p>
              <p className="mb-0 text-light fw-medium">Tel: 0086-15071131907</p>
            </div>

            <div className="text-secondary lh-sm mb-3">
              <p className="mb-1 text-light" style={{ opacity: 0.85 }}>
                Building 12, Tangcheng Industrial Park, Nanjing, China
              </p>
              <p className="mb-0 text-light fw-medium">Tel: 0086-15251746986</p>
            </div>

            <p className="mb-3 text-light fw-medium">E-mail: info@esegas.com</p>

            {/* Yellow Contact Us Button */}
            <div className="mb-3">
              <a
                href="#contact"
                className="btn fw-bold text-dark text-uppercase px-4 py-2"
                style={{
                  backgroundColor: '#ffb700',
                  borderRadius: '2px',
                  fontSize: '0.85rem',
                }}
              >
                Contact Us !
              </a>
            </div>

            {/* Social Icons */}
            <div className="d-flex align-items-center gap-3 pt-2 text-light">
              <a href="#facebook" className="text-light text-decoration-none hover-warning"><Facebook size={16} /></a>
              <a href="#twitter" className="text-light text-decoration-none hover-warning"><Twitter size={16} /></a>
              <a href="#youtube" className="text-light text-decoration-none hover-warning"><Youtube size={16} /></a>
              <a href="#linkedin" className="text-light text-decoration-none hover-warning"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Column 2: Products List 1 */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{ fontSize: '0.95rem' }}>
              Products
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-1.5 text-secondary mb-0">
              <li><span className="text-light" style={{ opacity: 0.8 }}>Flue Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Syngas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>TDL Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>FTIR Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>NDIR Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Process Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Hydrogen Analyzer</span></li>
              <li className="mt-2"><span className="text-light" style={{ opacity: 0.8 }}>Gas Conditioning System Accessories</span></li>
            </ul>
          </div>

          {/* Column 3: Products List 2 */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3 opacity-0" style={{ fontSize: '0.95rem' }}>.</h6>
            <ul className="list-unstyled d-flex flex-column gap-1.5 text-secondary mb-0">
              <li><span className="text-light" style={{ opacity: 0.8 }}>Portable Flue Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Portable Syngas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Portable TDL Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Portable FTIR Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Greenhouse Gas Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Oxygen Analyzer</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Zirconia Oxygen Analyzer</span></li>
              <li className="mt-2"><span className="text-light" style={{ opacity: 0.8 }}>Air Quality Monitoring System (AQMS)</span></li>
            </ul>
          </div>

          {/* Column 4: Products List 3 */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="fw-bold text-white mb-3 opacity-0" style={{ fontSize: '0.95rem' }}>.</h6>
            <ul className="list-unstyled d-flex flex-column gap-1.5 text-secondary mb-0">
              <li><span className="text-light" style={{ opacity: 0.8 }}>Mercury CEMS</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>VOC CEMS</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>TDL Online Gas Analysis System</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>FTIR CEMS</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Gas Sensor Module</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Ultrasonic Flow Meter</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Dust Monitor</span></li>
              <li><span className="text-light" style={{ opacity: 0.8 }}>Continuous Emission Monitoring System (CEMS)</span></li>
            </ul>
          </div>

          {/* Column 5: Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{ fontSize: '0.95rem' }}>
              Links
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li><Link href="/" className="text-decoration-none fw-bold" style={{ color: '#ffb700' }}>Home</Link></li>
              <li><Link href="#about" className="text-light text-decoration-none" style={{ opacity: 0.85 }}>About us</Link></li>
              <li><Link href="#products" className="text-light text-decoration-none" style={{ opacity: 0.85 }}>Product</Link></li>
              <li><Link href="#news" className="text-light text-decoration-none" style={{ opacity: 0.85 }}>News</Link></li>
              <li><Link href="#blog" className="text-light text-decoration-none" style={{ opacity: 0.85 }}>Blog</Link></li>
              <li><Link href="#contact" className="text-light text-decoration-none" style={{ opacity: 0.85 }}>Contact</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top border-secondary border-opacity-25 py-3" style={{ backgroundColor: '#0f182c' }}>
        <div className="container-fluid px-lg-5 d-flex flex-column flex-sm-row justify-content-between align-items-center text-secondary" style={{ fontSize: '0.78rem' }}>
          <div className="d-flex align-items-center gap-2 mb-2 mb-sm-0">
            <ShieldCheck size={16} style={{ color: '#0088cc' }} />
            <span className="text-light" style={{ opacity: 0.8 }}>Copyright © 2023 esegas.com. All rights reserved.</span>
          </div>
          <div className="d-flex gap-4">
            <span className="text-light" style={{ opacity: 0.8 }}>Privacy Policy</span>
            <span className="text-light" style={{ opacity: 0.8 }}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
