'use client';

import React from 'react';

// Brand SVGs matching reference image exactly
const ScgLogo = () => (
  <svg height="34" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4 L31 11.5 L31 26.5 L18 34 L5 26.5 L5 11.5 Z" stroke="#E52320" strokeWidth="2" fill="none"/>
    <circle cx="18" cy="19" r="6" stroke="#E52320" strokeWidth="1.5" fill="none"/>
    <text x="40" y="27" fill="#E52320" fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">SCG</text>
  </svg>
);

const EverbrightLogo = () => (
  <svg height="34" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="22" height="22" rx="2" fill="#E60012"/>
    <path d="M7 12 H19 M7 17 H16 M7 22 H19" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="30" y="19" fill="#222222" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">光大环境</text>
    <text x="30" y="27" fill="#888888" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.4">EVERBRIGHT ENVIRONMENT</text>
  </svg>
);

const CeaLogo = () => (
  <svg height="34" viewBox="0 0 70 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="3" width="30" height="30" fill="#E30613"/>
    <text x="8" y="24" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="-0.5">cea</text>
  </svg>
);

const AbbLogo = () => (
  <svg height="34" viewBox="0 0 95 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="28" fill="#FF0000" fontSize="30" fontWeight="900" fontFamily="'Arial Black', Impact, sans-serif" letterSpacing="-1">ABB</text>
  </svg>
);

const EnveaLogo = () => (
  <svg height="34" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 22 C8 16 14 10 20 12 C23 8 30 9 32 13 C36 13 39 17 37 22 C37 22 10 22 10 22 Z" stroke="#009ee3" strokeWidth="2.5" fill="none"/>
    <text x="42" y="25" fill="#009ee3" fontSize="19" fontWeight="700" fontFamily="system-ui, sans-serif">envea<tspan fontSize="9" dy="-7">™</tspan></text>
  </svg>
);

const SiemensLogo = () => (
  <svg height="34" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="26" fill="#009999" fontSize="21" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1.5">SIEMENS</text>
  </svg>
);

const PetroChinaLogo = () => (
  <svg height="34" viewBox="0 0 125 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="14" r="11" fill="#E40011"/>
    <path d="M18 3 L21 14 H15 Z M18 3 L15 14 Z M7 14 L18 14 L9 20 Z M29 14 L18 14 Z" fill="#FFD100"/>
    <text x="5" y="32" fill="#111111" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif">PetroChina</text>
  </svg>
);

const SinopecLogo = () => (
  <svg height="34" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="15" stroke="#E3001B" strokeWidth="2" fill="none"/>
    <text x="8" y="22" fill="#E3001B" fontSize="9" fontWeight="800" fontFamily="system-ui, sans-serif">SINOPEC</text>
  </svg>
);

const brandList = [
  { id: 'scg1', component: <ScgLogo /> },
  { id: 'everbright', component: <EverbrightLogo /> },
  { id: 'cea', component: <CeaLogo /> },
  { id: 'abb', component: <AbbLogo /> },
  { id: 'envea', component: <EnveaLogo /> },
  { id: 'siemens', component: <SiemensLogo /> },
  { id: 'petrochina', component: <PetroChinaLogo /> },
  { id: 'sinopec', component: <SinopecLogo /> },
  { id: 'scg2', component: <ScgLogo /> },
];

export default function ClientLogos() {
  // Duplicate array for infinite seamless looping
  const marqueeItems = [...brandList, ...brandList];

  return (
    <section className="py-4 bg-white border-top border-bottom overflow-hidden position-relative" style={{ borderColor: '#e2e8f0' }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden w-100">
        <div className="animate-marquee align-items-center gap-5">
          {marqueeItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="d-flex align-items-center justify-content-center px-3 opacity-90 hover-opacity-100 transition-all cursor-pointer">
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
