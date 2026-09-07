import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'FACTORY PRODUCTION TOUR',
    thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=500&auto=format&fit=crop',
    duration: '03:45',
  },
  {
    id: 2,
    title: 'CEMS INSTALLATION GUIDE',
    thumbnail: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=500&auto=format&fit=crop',
    duration: '05:12',
  },
  {
    id: 3,
    title: 'GAS ANALYZER DEMO',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop',
    duration: '02:30',
  },
];

export default function VideoSection() {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: '#004b5c' }}>
      <div className="container py-4">
        <div className="row g-4">
          {videos.map((vid) => (
            <div key={vid.id} className="col-md-4 text-center">
              {/* Video Title Above */}
              <h6 className="fw-bold mb-3 text-white text-uppercase" style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                {vid.title}
              </h6>

              {/* Video Thumbnail Box */}
              <div className="position-relative rounded overflow-hidden shadow cursor-pointer group" style={{ height: '180px' }}>
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-40 d-flex align-items-center justify-content-center">
                  {/* Red Circular Play Button */}
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center shadow-lg transform-hover"
                    style={{
                      width: '54px',
                      height: '54px',
                      backgroundColor: '#dc2626',
                    }}
                  >
                    <Play size={24} fill="#ffffff" className="text-white ms-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white px-2 py-1 small rounded-start">
                  {vid.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
