'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
  categoryIds?: number[];
}

interface ProductListProps {
  initialCategories?: CategoryItem[];
  allProductsData?: ProductItem[];
}

const ITEMS_PER_PAGE = 15;

export default function ProductList({
  initialCategories = [],
  allProductsData = [],
}: ProductListProps) {
  const [categories, setCategories] = useState<CategoryItem[]>(initialCategories);
  const [allProducts, setAllProducts] = useState<ProductItem[]>(allProductsData);
  const [selectedCatId, setSelectedCatId] = useState<number | null>(null);
  const [selectedCatName, setSelectedCatName] = useState<string>('All Products');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(allProductsData.length === 0 && initialCategories.length === 0);

  // Keep state updated if initial server props arrive
  useEffect(() => {
    if (initialCategories.length > 0) {
      setCategories(initialCategories);
    }
  }, [initialCategories]);

  useEffect(() => {
    if (allProductsData.length > 0) {
      setAllProducts(allProductsData);
      setLoading(false);
    }
  }, [allProductsData]);

  // Client-side fallback fetch for categories and products if not preloaded by SSR
  useEffect(() => {
    if (allProducts.length > 0 && categories.length > 0) return;

    async function loadData() {
      setLoading(true);
      try {
        const wpUrl = getPublicWpUrl();

        const [catsRes, prodsRes] = await Promise.all([
          fetch(`${wpUrl}/wp-json/wp/v2/product_cat?per_page=100&_fields=id,name,count,slug`),
          fetch(`${wpUrl}/wp-json/wp/v2/product?per_page=100&_fields=id,title,link,product_cat,_embedded`),
        ]);

        if (catsRes.ok) {
          const catData = await catsRes.json();
          if (Array.isArray(catData)) {
            const validCats = catData
              .filter((c: any) => c.count > 0 && c.slug !== 'uncategorized')
              .sort((a: any, b: any) => a.name.localeCompare(b.name));
            setCategories(validCats);
          }
        }

        if (prodsRes.ok) {
          const prodData = await prodsRes.json();
          if (Array.isArray(prodData)) {
            const formatted = prodData.map((p: any) => {
              const rawImage =
                p._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                p._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url ||
                '';

              return {
                id: p.id,
                title: p.title?.rendered || p.title || 'Gas Analyzer Product',
                image: formatWpImageUrl(rawImage),
                link: p.link || `/product`,
                categoryIds: Array.isArray(p.product_cat) ? p.product_cat : [],
              };
            });
            setAllProducts(formatted);
          }
        }
      } catch (err) {
        console.error('Failed to fetch catalog data:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [allProducts.length, categories.length]);

  // INSTANT 0ms Client-Side Filtering by Category
  const filteredProducts = useMemo(() => {
    if (!selectedCatId) {
      return allProducts;
    }
    return allProducts.filter((p) => p.categoryIds?.includes(selectedCatId));
  }, [allProducts, selectedCatId]);

  // Calculate pagination from filtered products instantly (0ms)
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE) || 1;

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleCategorySelect = (catId: number | null, catName: string) => {
    setSelectedCatId(catId);
    setSelectedCatName(catName);
    setCurrentPage(1);
  };

  return (
    <section className="py-5 bg-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="container py-3">
        <div className="row g-4 justify-content-between">

          {/* Left Column: Categories Sidebar */}
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
                    All Products ({allProducts.length})
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
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading products...</span>
                </div>
                <p className="text-muted mt-2 small">Loading products catalog...</p>
              </div>
            ) : currentProducts && currentProducts.length > 0 ? (
              <>
                {/* 3 Columns Products Grid matching design screenshot */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                  {currentProducts.map((prod) => (
                    <div key={prod.id} className="col">
                      <div className="h-100 bg-white d-flex flex-column justify-content-between text-center">
                        <div>
                          {/* Gray Square Product Image Container */}
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

                {/* API Pagination */}
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
