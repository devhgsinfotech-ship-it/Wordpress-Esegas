import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container text-center py-5" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 className="display-1 fw-bold text-muted">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-secondary mb-4">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn text-white px-4 py-2" style={{ backgroundColor: '#004d5a', borderRadius: '4px' }}>
        Return Home
      </Link>
    </div>
  );
}
