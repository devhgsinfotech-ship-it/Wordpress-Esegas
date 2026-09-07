import React from 'react';
import Link from 'next/link';
import ProductList from '@/components/product/ProductList';

export const metadata = {
  title: 'Gas Analyzer Products & OEM Modules | ESE GAS',
  description: 'Explore high-precision TDLAS laser gas analyzers, CEMS emission monitoring cabinets, NDIR gas analyzers, and OEM sensor modules.',
};

export default function ProductPage() {
  return (
    <div>
      {/* Product Page Hero Banner */}
      <section
        className="py-5 text-white position-relative"
        style={{
          backgroundColor: '#004b5c',
          backgroundImage: `linear-gradient(rgba(0, 75, 92, 0.85), rgba(0, 75, 92, 0.85)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container py-4 text-center">
          <h1 className="fw-black text-white text-uppercase mb-3" style={{ fontSize: '2.4rem' }}>
            Gas Analyzer Products & OEM Modules
          </h1>
          <nav className="d-flex justify-content-center text-sm">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-warning text-decoration-none fw-bold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-light opacity-75">
                Products
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Product Catalog List */}
      <ProductList />
    </div>
  );
}
