import React from 'react';
import Link from 'next/link';
import ProductList from '@/components/product/ProductList';
import { getProductCategories, getAllProducts } from '@/lib/wordpress';

export const revalidate = 60; // 60s background revalidation for instant page load

export const metadata = {
  title: 'Gas Analyzer Products & OEM Modules | ESE GAS',
  description: 'Explore high-precision TDLAS laser gas analyzers, CEMS emission monitoring cabinets, NDIR gas analyzers, and OEM sensor modules.',
};

export default async function ProductPage() {
  // Server-side pre-fetching categories and all catalog products for instant 0ms client filtering
  const [categories, allProducts] = await Promise.all([
    getProductCategories(),
    getAllProducts(),
  ]);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Product Page Hero Banner */}
      <section
        className="py-4 text-white text-center"
        style={{
          backgroundColor: '#004d5a',
        }}
      >
        <div className="container py-3">
          <h1 className="fw-bold text-white mb-1" style={{ fontSize: '2rem' }}>
            Product
          </h1>
          <nav className="d-flex justify-content-center">
            <ol className="breadcrumb mb-0" style={{ fontSize: '0.85rem' }}>
              <li className="breadcrumb-item">
                <Link href="/" className="text-white-50 text-decoration-none hover-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-white fw-semibold">
                Product
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Product Catalog List with Server-Preloaded Initial Data */}
      <ProductList
        initialCategories={categories}
        allProductsData={allProducts}
      />
    </div>
  );
}
