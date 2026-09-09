'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getPublicWpUrl, formatWpImageUrl } from '@/lib/wordpress';

interface CategoryItem {
  id: number;
  name: string;
  count: number;
  slug: string;
}

interface ProductItem {
  id: number;
  title: string;
  image: string;
  link?: string;
}

interface ProductListProps {
  initialCategories?: CategoryItem[];
  initialProducts?: ProductItem[];
  initialTotalProducts?: number;
  initialTotalPages?: number;
}

export default function ProductList({
  initialCategories = [],
  initialProducts = [],
  initialTotalProducts = 0,
  initialTotalPages = 1,
}: ProductListProps) {
  const [categories, setCategories] = useState<CategoryItem[]>(initialCategories);
  const [selectedCatId, setSelectedCatId] = useState<number | null>(null);
  const [selectedCatName, setSelectedCatName] = useState<string>('All Products');

  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages);
  const [totalProducts, setTotalProducts] = useState<number>(initialTotalProducts);
  const [loading, setLoading] = useState<boolean>(initialProducts.length === 0);

  // In-memory client cache for instant 0ms category switches & pagination
  const cacheRef = useRef<Record<string, { products: ProductItem[]; totalProducts: number; totalPages: number }>>({
    'all_1': {
      products: initialProducts,
      totalProducts: initialTotalProducts,
      totalPages: initialTotalPages,
    },
  });

  // Keep state updated if initial props arrive/change
  useEffect(() => {
    if (initialCategories.length > 0) {
      setCategories(initialCategories);
    }
  }, [initialCategories]);

  useEffect(() => {
    if (initialProducts.length > 0 && selectedCatId === null && currentPage === 1) {
      setProducts(initialProducts);
      setTotalProducts(initialTotalProducts);
      setTotalPages(initialTotalPages);
      setLoading(false);
      cacheRef.current['all_1'] = {
        products: initialProducts,
        totalProducts: initialTotalProducts,
        totalPages: initialTotalPages,
      };
    }
  }, [initialProducts, initialTotalProducts, initialTotalPages, selectedCatId, currentPage]);

  // 1. Fetch Product Categories dynamically on client if not preloaded
  useEffect(() => {
    if (categories.length > 0) return;

    async function fetchCategories() {
      try {
        const wpUrl = getPublicWpUrl();
        const res = await fetch(`${wpUrl}/wp-json/wp/v2/product_cat?per_page=100`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            const validCats = data
              .filter((c: any) => c.count > 0 && c.slug !== 'uncategorized')
              .sort((a: any, b: any) => a.name.localeCompare(b.name));
            setCategories(validCats);
          }
        }
      } catch (err) {
        console.error('Failed to fetch product categories:', err);
      }
    }
    fetchCategories();
  }, [categories.length]);

  // 2. Fetch Products with in-memory caching for instant category switching
  useEffect(() => {
    const cacheKey = `${selectedCatId || 'all'}_${currentPage}`;

    // If data is already in client-side in-memory cache, render INSTANTLY (0ms)!
    if (cacheRef.current[cacheKey]) {
      const cached = cacheRef.current[cacheKey];
      setProducts(cached.products);
      setTotalProducts(cached.totalProducts);
      setTotalPages(cached.totalPages);
      setLoading(false);
      return;
    }

    async function fetchProducts() {
      setLoading(true);
      try {
        const wpUrl = getPublicWpUrl();
        let endpoint = `${wpUrl}/wp-json/wp/v2/product?per_page=15&page=${currentPage}&_embed`;
        if (selectedCatId) {
          endpoint += `&product_cat=${selectedCatId}`;
        }

        const res = await fetch(endpoint);
        if (res.ok) {
          const totalHeader = parseInt(res.headers.get('x-wp-total') || '0', 10);
          const pagesHeader = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);

          const data = await res.json();
          if (Array.isArray(data)) {
            const formatted = data.map((p: any) => {
              const rawImage =
                p._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                p._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
                p.images?.[0]?.src ||
                '';

              return {
                id: p.id,
                title: p.title?.rendered || 'Gas Analyzer Product',
                image: formatWpImageUrl(rawImage),
                link: p.link || `/product`,
              };
            });

            // Store in in-memory cache
            cacheRef.current[cacheKey] = {
              products: formatted,
              totalProducts: totalHeader,
              totalPages: pagesHeader,
            };

            setProducts(formatted);
            setTotalProducts(totalHeader);
            setTotalPages(pagesHeader);
          }
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCatId, currentPage]);

  const handleCategorySelect = (catId: number | null, catName: string) => {
    setSelectedCatId(catId);
    setSelectedCatName(catName);
    setCurrentPage(1);
  };

  return (
    <section className="py-5 bg-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="container py-3">
        <div className="row g-4 justify-content-between">

          {/* Left Column: Categories Panel with Light Gray Background & Soft Shadow */}
          <div className="col-12 col-md-4 col-lg-3">
            <div
              className="p-4 rounded-1"
              style={{
                backgroundColor: '#f1f5f9',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                border: '1px solid #e2e8f0',
              }}
            >
              {/* Sidebar Header */}
              <h4
                className="fw-bold mb-4"
                style={{
                  color: '#0f172a',
                  fontSize: '1.45rem',
                  letterSpacing: '-0.3px',
                }}
              >
                Categories
              </h4>

              {/* Categories List */}
              <div>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: '0.84rem' }}>
                  {/* All Products Option */}
                  <li
                    onClick={() => handleCategorySelect(null, 'All Products')}
                    className="py-1 cursor-pointer transition-all"
                    style={{
                      cursor: 'pointer',
                      color: selectedCatId === null ? '#004d5a' : '#475569',
                      fontWeight: selectedCatId === null ? 700 : 400,
                    }}
                  >
                    All Products ({totalProducts})
                  </li>

                  {/* Dynamic Product Categories from API */}
                  {categories.map((cat) => {
                    const isSelected = selectedCatId === cat.id;
                    return (
                      <li
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id, cat.name)}
                        className="py-1 cursor-pointer transition-all"
                        style={{
                          cursor: 'pointer',
                          color: isSelected ? '#004d5a' : '#475569',
                          fontWeight: isSelected ? 700 : 400,
                        }}
                      >
                        {cat.name} ({cat.count})
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Product Introduction & Products Grid */}
          <div className="col-12 col-md-8 col-lg-9 ps-lg-4">
            {/* Section Heading */}
            <h3
              className="fw-bold mb-4"
              style={{ color: '#004d5a', fontSize: '1.3rem', letterSpacing: '0.2px' }}
            >
              Product Introduction {selectedCatId && `- ${selectedCatName}`}
            </h3>

            {/* Products Loading State */}
            {loading && products.length === 0 ? (
              <div className="text-center py-5">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading products...</span>
                </div>
                <p className="text-muted mt-2 small">Loading products from WordPress API...</p>
              </div>
            ) : products && products.length > 0 ? (
              <>
                {/* 3 Columns Products Grid matching design screenshot */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                  {products.map((prod) => (
                    <div key={prod.id} className="col">
                      <div className="h-100 bg-white d-flex flex-column justify-content-between text-center">
                        <div>
                          {/* Gray Square Product Image Container matching reference */}
                          <div
                            className="p-3 mb-3 d-flex align-items-center justify-content-center mx-auto rounded-1"
                            style={{
                              height: '210px',
                              width: '100%',
                              backgroundColor: '#f1f5f9',
                              border: '1px solid #e2e8f0',
                            }}
                          >
                            <div className="bg-white p-2 w-100 h-100 d-flex align-items-center justify-content-center rounded-1">
                              {prod.image ? (
                                <img
                                  src={prod.image}
                                  alt={prod.title}
                                  className="img-fluid h-100 object-fit-contain"
                                />
                              ) : (
                                <div className="text-muted small">No Image</div>
                              )}
                            </div>
                          </div>

                          {/* Product Title */}
                          <h6
                            className="fw-bold mb-3 px-1 lh-base"
                            style={{
                              color: '#004d5a',
                              fontSize: '0.88rem',
                              lineHeight: '1.38',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              minHeight: '3.6em',
                            }}
                          >
                            {prod.title}
                          </h6>
                        </div>

                        {/* Yellow Read More Button */}
                        <div className="pb-2">
                          <a
                            href={prod.link || `#product-${prod.id}`}
                            className="btn fw-bold text-dark text-uppercase px-4 py-1.5 border-0 shadow-sm"
                            style={{
                              backgroundColor: '#ffc107',
                              fontSize: '0.78rem',
                              borderRadius: '3px',
                              letterSpacing: '0.3px',
                              display: 'inline-block',
                            }}
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* API Pagination matching design screenshot */}
                {totalPages > 1 && (
                  <div className="d-flex justify-content-end align-items-center gap-1.5 mt-5 pt-3">
                    {Array.from({ length: totalPages }).map((_, idx) => {
                      const pageNum = idx + 1;
                      const isActive = currentPage === pageNum;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className="btn btn-sm px-2.5 py-1"
                          style={{
                            minWidth: '32px',
                            fontSize: '0.82rem',
                            border: '1px solid #d1d5db',
                            backgroundColor: isActive ? '#f1f5f9' : '#ffffff',
                            color: isActive ? '#1e293b' : '#4b5563',
                            fontWeight: isActive ? 700 : 400,
                            borderRadius: '2px',
                          }}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    {currentPage < totalPages && (
                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="btn btn-sm px-2.5 py-1"
                        style={{
                          minWidth: '32px',
                          fontSize: '0.82rem',
                          border: '1px solid #d1d5db',
                          backgroundColor: '#ffffff',
                          color: '#4b5563',
                          borderRadius: '2px',
                        }}
                        aria-label="Next Page"
                      >
                        &rarr;
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-5 bg-light rounded border my-3">
                <p className="text-secondary mb-0 fw-semibold">
                  No products available in category "{selectedCatName}".
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
