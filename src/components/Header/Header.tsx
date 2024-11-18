'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 px-8 py-4 transition-all duration-300 ${
        scrolled ? 'glass-panel elevated-panel' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <Link
          href="/"
          className="gradient-text font-mono text-2xl font-medium tracking-tight"
        >
          ashton.services
        </Link>

        <nav className="flex gap-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-[0.95rem] tracking-wide"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
