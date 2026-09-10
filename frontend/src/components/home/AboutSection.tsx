import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: '#023d48' }}>
      <div className="container py-3 py-md-4">
        {/* Title */}
        <h2 className="text-center fw-bold text-white mb-4 mb-lg-5" style={{ fontSize: '1.9rem', letterSpacing: '0.5px' }}>
          About ESEGAS
        </h2>

        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Side: Text and Yellow Pill Button */}
          <div className="col-lg-6">
            <p className="lh-base mb-4 text-white" style={{ fontSize: '0.94rem', textAlign: 'justify', opacity: 0.95 }}>
              Enviro Solutions Technology (ESE) Gas analyzer manufacture has achieved
              remarkable results in the field of gas analyzers and gas analysis systems. Our
              products have been widely applied in the petrochemical, environmental
              protection, pharmaceutical, and other industrial fields. We have created high-
              quality products that meet international standards by taking advantage of our
              advanced production and testing technologies. As an ISO9001-certified company,
              we are committed to providing customers with quality products and services. Our
              experienced team of professionals is dedicated to developing efficient solutions
              that help our customers protect the environment while increasing their
              operational efficiencies. Our integrated gas analysis systems are designed to be
              easy to install and use, ensuring a seamless operation for our clients. We also
              provide Comprehensive technical support and training to ensure that all users can
              use our systems safely and effectively. At ESE Technology, we strive to stay ahead
              of the curve when it comes to gas analysis technology. We continuously invest in
              research and development activities for new products and technologies that help
              us meet the needs from our customers.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="btn fw-bold px-4 py-2 text-dark rounded-pill shadow-sm"
                style={{
                  backgroundColor: '#ffc107',
                  borderColor: '#ffc107',
                  fontSize: '0.95rem',
                }}
              >
                Contact Us !
              </a>
            </div>
          </div>

          {/* Right Side: White Padded Card with 5-Photo Grid */}
          <div className="col-lg-6">
            <div className="bg-white p-2 p-md-3 rounded shadow-sm">
              <div className="row g-2">
                {/* Left Column of Grid: Building + 2 Team Photos */}
                <div className="col-5 d-flex flex-column gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                    alt="ESEGAS Headquarters Building"
                    className="img-fluid rounded w-100 object-fit-cover"
                    style={{ height: '170px' }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                    alt="ESEGAS Event Photo"
                    className="img-fluid rounded w-100 object-fit-cover"
                    style={{ height: '75px' }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                    alt="ESEGAS Team Photo"
                    className="img-fluid rounded w-100 object-fit-cover"
                    style={{ height: '75px' }}
                  />
                </div>

                {/* Right Column of Grid: Top Wide Workshop + Bottom 2 Cabinets */}
                <div className="col-7 d-flex flex-column gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop"
                    alt="Gas Analyzer Production Workshop"
                    className="img-fluid rounded w-100 object-fit-cover"
                    style={{ height: '170px' }}
                  />
                  <div className="row g-2">
                    <div className="col-7">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
                        alt="Gas Analyzer Cabinets Row"
                        className="img-fluid rounded w-100 object-fit-cover"
                        style={{ height: '154px' }}
                      />
                    </div>
                    <div className="col-5">
                      <img
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop"
                        alt="CEMS Gas Cabinet System"
                        className="img-fluid rounded w-100 object-fit-cover"
                        style={{ height: '154px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

