'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mt-32 w-full bg-[var(--bg-secondary)]"
    >
      {/* Gradient Divider */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-30" />
      
      <div className="mx-auto max-w-[1400px] px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <motion.p 
            className="text-sm text-[var(--text-secondary)]"
            whileHover={{ 
              color: 'var(--accent-primary)',
              transition: { duration: 0.2 }
            }}
          >
            2024 ashton.services
          </motion.p>
          <div className="flex gap-6">
            <motion.a 
              href="/privacy" 
              className="text-sm text-[var(--text-secondary)]"
              whileHover={{ 
                color: 'var(--accent-primary)',
                transition: { duration: 0.2 }
              }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="/terms" 
              className="text-sm text-[var(--text-secondary)]"
              whileHover={{ 
                color: 'var(--accent-primary)',
                transition: { duration: 0.2 }
              }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
