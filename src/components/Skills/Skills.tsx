'use client';

import { motion } from 'framer-motion';
import { FloatingCards } from '../Hero/FloatingCards';

export const Skills = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background to-background opacity-50" />
      
      {/* Title */}
      <motion.div
        className="relative z-10 text-center mb-16 w-full max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group">
          {/* Title Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
          
          {/* Glass Background */}
          <div 
            className="relative px-8 py-4 rounded-lg backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(20,20,20,0.05)] shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            style={{
              WebkitBackdropFilter: 'blur(20px)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] text-center">
              Skills & Expertise
            </h2>
            <p className="mt-4 text-lg font-light text-[var(--text-secondary)] text-center max-w-2xl mx-auto">
              A curated collection of technologies and tools I've mastered throughout my journey
            </p>
          </div>
        </div>
      </motion.div>

      {/* Cards Container */}
      <motion.div 
        className="relative z-0 w-full max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FloatingCards />
      </motion.div>
    </section>
  );
};
