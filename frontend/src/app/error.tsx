'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container text-center py-5" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 className="mb-3">Something went wrong!</h2>
      <p className="text-secondary mb-4">An unexpected error occurred while loading this page.</p>
      <div className="d-flex gap-2">
        <button
          onClick={() => reset()}
          className="btn text-white px-4 py-2"
          style={{ backgroundColor: '#004d5a', borderRadius: '4px' }}
        >
          Try again
        </button>
        <Link href="/" className="btn btn-outline-secondary px-4 py-2">
          Return Home
        </Link>
      </div>
    </div>
  );
}
