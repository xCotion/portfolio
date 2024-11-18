import React from 'react';

// This is a server component
export default function FloatingCardsLoading() {
  return (
    <div className="fixed inset-0 w-full z-10">
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Loading placeholders */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div 
            key={index}
            className="absolute opacity-0 h-[180px] w-[280px]"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
