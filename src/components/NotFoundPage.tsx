'use client';

import Link from 'next/link';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h2 className="text-4xl font-bold mb-4">Not Found</h2>
      <p className="text-lg mb-4">Could not find the requested resource</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
