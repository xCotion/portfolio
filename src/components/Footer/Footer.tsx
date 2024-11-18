'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      {/* Vision OS Glass Effect Container */}
      <div className="relative">
        {/* Gaussian Blur Background */}
        <div 
          className="absolute inset-0 backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] 
          dark:bg-[rgba(20,20,20,0.05)] shadow-[0_-8px_32px_rgba(0,0,0,0.05)]"
          style={{
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px)',
          }}
        />
        
        {/* Light Beam Effect */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[var(--accent-primary)] to-transparent opacity-[0.03] blur-3xl" />
        
        {/* Content Container */}
        <div className="relative mx-auto max-w-[1400px] px-8 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            {/* Copyright Text with Hover Effect */}
            <motion.p 
              className="text-sm font-light tracking-wide text-[var(--text-secondary)] opacity-80"
              whileHover={{ 
                opacity: 1,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              &copy; 2024 ashton.services
            </motion.p>

            {/* Links with Vision OS Hover Effect */}
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service'].map((text, i) => (
                <motion.a
                  key={i}
                  href={`/${text.toLowerCase().replace(' ', '-')}`}
                  className="relative text-sm font-light tracking-wide text-[var(--text-secondary)] opacity-80"
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Hover Glow Effect */}
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-transparent opacity-0 blur-lg transition-opacity group-hover:opacity-20" />
                  {text}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
