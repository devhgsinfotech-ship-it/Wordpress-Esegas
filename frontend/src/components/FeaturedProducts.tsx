import React from 'react';
import { ShoppingCart, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  regular_price?: string;
  description?: string;
  short_description?: string;
  images?: { src: string; alt: string }[];
  categories?: { name: string }[];
}

interface FeaturedProductsProps {
  initialProducts?: Product[];
}

const fallbackProducts: Product[] = [
  {
    id: 101,
    name: 'Industrial Oxygen Cylinder (47L)',
    price: '₹1,850',
    regular_price: '₹2,100',
    short_description: 'High pressure 150 Bar oxygen cylinder for steel cutting, welding & fabrication.',
    categories: [{ name: 'Industrial Gas' }],
  },
  {
    id: 102,
    name: 'Commercial LPG Cylinder (19kg)',
    price: '₹1,780',
    regular_price: '₹1,950',
    short_description: 'Vapor withdrawal commercial LPG cylinder for heavy culinary & hotel use.',
    categories: [{ name: 'LPG Gas' }],
  },
  {
    id: 103,
    name: 'High Purity Argon Cylinder (47L)',
    price: '₹2,450',
    regular_price: '₹2,800',
    short_description: '99.999% Grade 5 Argon shielding gas for TIG welding & stainless steel.',
    categories: [{ name: 'Specialty Gas' }],
  },
  {
    id: 104,
    name: 'Medical Oxygen Cylinder Kit',
    price: '₹3,200',
    regular_price: '₹3,600',
    short_description: 'Includes regulator, humidifier bottle, nasal cannula and safety valve.',
    categories: [{ name: 'Medical Gas' }],
  },
];

export default function FeaturedProducts({ initialProducts = [] }: FeaturedProductsProps) {
  const displayProducts = initialProducts.length > 0 ? initialProducts : fallbackProducts;

  return (
    <section id="products" className="py-5 position-relative">
      <div className="container py-4">
        
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
          <div>
            <small className="text-danger fw-bold uppercase tracking-widest d-block mb-1">
              WooCommerce Integrated Store
            </small>
            <h2 className="display-6 fw-bold text-white mb-0">
              Featured Gas Cylinders & Equipment
            </h2>
          </div>

          <a href="#catalog" className="text-danger text-decoration-none fw-bold small mt-3 mt-md-0 d-flex align-items-center gap-1">
            <span>View Complete Store Catalog</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Product Cards */}
        <div className="row g-4">
          {displayProducts.map((product) => {
            const categoryName = product.categories?.[0]?.name || 'Gas Cylinder';
            return (
              <div key={product.id} className="col-sm-6 col-lg-3">
                <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1 uppercase">
                        {categoryName}
                      </span>
                      <span className="small text-success fw-semibold d-flex align-items-center gap-1">
                        <CheckCircle2 size={14} />
                        <span>Ready</span>
                      </span>
                    </div>

                    <h5 className="fw-bold text-white mb-2">{product.name}</h5>
                    <p className="text-secondary small mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {product.short_description?.replace(/<[^>]*>?/gm, '') || 'High purity cylinder tested for safety and immediate dispatch.'}
                    </p>
                  </div>

                  <div className="pt-3 border-top border-secondary d-flex align-items-center justify-content-between">
                    <div>
                      <span className="product-price">{product.price}</span>
                      {product.regular_price && (
                        <small className="text-muted text-decoration-line-through ms-2">
                          {product.regular_price}
                        </small>
                      )}
                    </div>

                    <button className="btn btn-outline-danger btn-sm p-2 rounded-3">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Banner */}
        <div className="glass-card p-4 mt-5 bg-dark border-warning border-opacity-50">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="p-3 rounded-3 bg-warning bg-opacity-25 text-warning">
                <ShieldAlert size={28} />
              </div>
              <div>
                <h5 className="text-white fw-bold mb-1">Require Commercial Bulk Pricing or Contract Refills?</h5>
                <p className="text-secondary mb-0 small">We provide tailored corporate billing, scheduled weekly refills, and dedicated gas bank manifolds.</p>
              </div>
            </div>

            <a href="tel:+919876543210" className="btn btn-warning text-dark fw-bold px-4 py-2 flex-shrink-0">
              Call Commercial Desk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
