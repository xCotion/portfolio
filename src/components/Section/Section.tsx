'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
}

export const Section = ({ id, title }: SectionProps) => {
  return (
    <section 
      id={id}
      className="relative h-screen w-full flex items-center justify-center"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background to-background opacity-50" />
      
      {/* Vision OS Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
        
        {/* Card Container */}
        <div className="relative flex flex-col items-center gap-6 p-8 rounded-2xl min-w-[600px] min-h-[300px]">
          {/* Glass Background */}
          <div 
            className="absolute inset-0 rounded-2xl backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(20,20,20,0.05)] shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            style={{
              WebkitBackdropFilter: 'blur(20px)',
              backdropFilter: 'blur(20px)',
            }}
          />
          
          {/* Content */}
          <motion.h2 
            className="relative text-4xl font-light tracking-tight text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h2>
          
          {/* Light Beam Effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[var(--accent-primary)] to-transparent opacity-[0.03] blur-3xl" />
        </div>
      </motion.div>
    </section>
  );
};
