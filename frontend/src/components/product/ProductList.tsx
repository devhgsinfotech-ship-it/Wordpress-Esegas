'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, CheckCircle } from 'lucide-react';

interface ProductItem {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  model: string;
}

const allProductsData: ProductItem[] = [
  {
    id: 1,
    name: 'Laser Gas Analyzer (TDLAS)',
    category: 'Gas Analyzer',
    model: 'ESE-LASER-3000',
    description: 'High-precision in-situ laser gas analyzer utilizing TDLAS technology for fast, zero-drift measurement of CO, CO2, H2O, NH3, and HCl.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Continuous Emission Monitoring System (CEMS)',
    category: 'CEMS System',
    model: 'ESE-CEMS-8000',
    description: 'Complete integrated CEMS cabinet for thermal power plants, boilers, and industrial stack flue gas SO2, NOx, CO, and O2 monitoring.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Laser Gas Detection OEM Module',
    category: 'OEM Gas Module',
    model: 'ESE-OEM-TDL-01',
    description: 'Compact TDLAS optical sensor engine module for system integrators and gas detector manufacturers.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'NDIR Infrared Gas Analyzer',
    category: 'Gas Analyzer',
    model: 'ESE-NDIR-5000',
    description: 'Non-dispersive infrared analyzer for continuous online process gas composition measurement in chemical and metallurgical plants.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'UV DOAS OEM Module',
    category: 'OEM Gas Module',
    model: 'ESE-OEM-UV-02',
    description: 'Ultraviolet Differential Optical Absorption Spectroscopy OEM optical module for ultralow SO2 and NOx measurement.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Portable Multi-Gas Detector',
    category: 'Portable Analyzer',
    model: 'ESE-PORTABLE-100',
    description: 'Rechargeable multi-gas portable detector with wireless Bluetooth logging for toxic and combustible gas safety audits.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'VOC Monitoring System (PID/FID)',
    category: 'CEMS System',
    model: 'ESE-VOC-9000',
    description: 'Continuous photoionization and flame ionization volatile organic compound monitoring system for industrial parks.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Zirconia Oxygen Analyzer Probe',
    category: 'Gas Analyzer',
    model: 'ESE-O2-ZIR-400',
    description: 'High-temperature in-situ zirconia oxygen probe for boiler combustion optimization and fuel efficiency.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'NDIR Gas Sensor Module',
    category: 'OEM Gas Module',
    model: 'ESE-OEM-NDIR-03',
    description: 'Dual-channel NDIR gas sensor module for OEM gas detector integrators.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format&fit=crop',
  },
];

const categories = ['All Products', 'Gas Analyzer', 'OEM Gas Module', 'CEMS System', 'Portable Analyzer'];

export default function ProductList() {
  const [selectedCat, setSelectedCat] = useState('All Products');
  const [searchFilter, setSearchFilter] = useState('');

  const filteredProducts = allProductsData.filter((p) => {
    const matchesCat = selectedCat === 'All Products' || p.category === selectedCat;
    const matchesSearch = p.name.toLowerCase().includes(searchFilter.toLowerCase()) || p.description.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-5 bg-light">
      <div className="container py-3">
        
        {/* Category Filters & Search */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5 p-3 bg-white rounded shadow-sm border">
          {/* Category Tabs */}
          <div className="d-flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`btn btn-sm font-weight-bold px-3 py-1.5 rounded-2 transition-all ${
                  selectedCat === cat ? 'text-white' : 'btn-light text-secondary'
                }`}
                style={{
                  backgroundColor: selectedCat === cat ? '#004b93' : '#f1f5f9',
                  fontSize: '0.88rem',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Filter */}
          <div className="input-group input-group-sm" style={{ maxWidth: '240px' }}>
            <input
              type="text"
              className="form-control bg-light border px-3"
              placeholder="Search products..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{ fontSize: '0.82rem' }}
            />
            <button className="btn border-0 text-white" style={{ backgroundColor: '#ffb700' }}>
              <Search size={15} />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white d-flex flex-column justify-content-between hover-shadow transition-all">
                <div>
                  {/* Category Pill */}
                  <div className="p-3 bg-light d-flex align-items-center justify-content-between">
                    <span className="badge text-dark font-weight-bold uppercase" style={{ backgroundColor: '#ffb700', fontSize: '0.72rem' }}>
                      {prod.category}
                    </span>
                    <span className="small text-muted font-monospace" style={{ fontSize: '0.75rem' }}>
                      {prod.model}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="p-3 text-center bg-white" style={{ height: '190px' }}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="img-fluid object-fit-contain h-100"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 border-top">
                    <h5 className="fw-bold mb-2" style={{ color: '#004b93', fontSize: '1.1rem' }}>
                      {prod.name}
                    </h5>
                    <p className="text-secondary small mb-3 lh-base" style={{ fontSize: '0.85rem' }}>
                      {prod.description}
                    </p>

                    <div className="d-flex items-center gap-1 text-success small font-weight-medium">
                      <CheckCircle size={14} />
                      <span>Certified Industrial Grade</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4 pt-0 d-flex gap-2">
                  <Link
                    href={`#inquiry-${prod.id}`}
                    className="btn fw-bold w-100 text-dark text-uppercase shadow-sm"
                    style={{ backgroundColor: '#ffb700', borderRadius: '2px', fontSize: '0.82rem' }}
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-5 bg-white rounded border my-4">
            <h5 className="text-muted">No products found matching your search.</h5>
          </div>
        )}

      </div>
    </section>
  );
}
