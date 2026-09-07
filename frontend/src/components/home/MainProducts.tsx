import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  permalink?: string;
}

interface MainProductsProps {
  products?: Product[];
}

export default function MainProducts({ products = [] }: MainProductsProps) {
  return (
    <section id="products" className="py-5 bg-white">
      <div className="container py-3 py-md-4">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" style={{ fontSize: '1.9rem', color: '#004d5a', letterSpacing: '0.5px' }}>
            New ESEGAS Products
          </h2>
        </div>

        {/* 6 Products Grid directly from REST API */}
        {products && products.length > 0 ? (
          <div className="row g-4 justify-content-center">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="col-md-6 col-lg-4">
                <div
                  className="card h-100 p-4 text-center d-flex flex-column justify-content-between bg-white rounded-1"
                  style={{
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <div>
                    {/* Product Image */}
                    <div className="mb-3 d-flex align-items-center justify-content-center" style={{ height: '140px' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid object-fit-contain"
                        style={{ maxHeight: '130px', maxWidth: '100%' }}
                      />
                    </div>

                    {/* Product Name */}
                    <h5 className="fw-bold mb-3" style={{ color: '#00596b', fontSize: '1.15rem' }}>
                      {product.name}
                    </h5>

                    {/* Product Description */}
                    <p
                      className="text-secondary small mb-4 lh-base text-center"
                      style={{
                        fontSize: '0.86rem',
                        color: '#4a5568',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '4.8em',
                      }}
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* Yellow "Click here" CTA Button */}
                  <div className="pt-2 d-flex justify-content-center">
                    <a
                      href={product.permalink || '/product'}
                      className="btn fw-bold px-4 py-2 text-dark shadow-sm"
                      style={{
                        backgroundColor: '#ffc107',
                        borderColor: '#ffc107',
                        fontSize: '0.88rem',
                        borderRadius: '2px',
                        fontWeight: 700,
                      }}
                    >
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5 bg-white rounded-2 border shadow-sm my-3">
            <p className="text-muted mb-0 fw-semibold">No products available from WordPress REST API.</p>
          </div>
        )}
      </div>
    </section>
  );
}




