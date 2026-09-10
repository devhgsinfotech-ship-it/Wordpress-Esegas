import React from 'react';

const videoData = [
  {
    id: 'Om39FoucNo0',
    title: 'ESEGAS Company Introduction',
    embedUrl: 'https://www.youtube.com/embed/Om39FoucNo0',
  },
  {
    id: 'ninWI2sDL0Y',
    title: 'Portable Syngas Analyzer Operation',
    embedUrl: 'https://www.youtube.com/embed/ninWI2sDL0Y',
  },
  {
    id: 'mWcT7Ii88kc',
    title: 'Portable Flue Gas Analyzer Operation',
    embedUrl: 'https://www.youtube.com/embed/mWcT7Ii88kc',
  },
];

export default function VideoSection() {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: '#004655' }}>
      <div className="container py-3 py-md-4">
        <div className="row g-4 justify-content-center">
          {videoData.map((vid) => (
            <div key={vid.id} className="col-12 col-md-4">
              {/* Title Above Video */}
              <h6
                className="fw-bold mb-3 text-white text-center"
                style={{
                  fontSize: '0.92rem',
                  letterSpacing: '0.3px',
                  minHeight: '2.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {vid.title}
              </h6>

              {/* YouTube Video Responsive Embed Container */}
              <div
                className="ratio ratio-16x9 rounded overflow-hidden shadow-lg"
                style={{ backgroundColor: '#000000' }}
              >
                <iframe
                  src={vid.embedUrl}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-100 h-100 border-0"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

