'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed bottom-[100px] right-8 z-50">
      {/* Glass Container */}
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
        
        {/* Glass Background */}
        <div 
          className="relative flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(20,20,20,0.05)] shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
          style={{
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Circular Progress */}
          <svg
            className="absolute w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              className="stroke-[var(--accent-primary)] opacity-20"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              strokeWidth="6"
            />
            <motion.circle
              className="stroke-[var(--accent-primary)]"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              strokeWidth="6"
              strokeDasharray="283"
              style={{ 
                pathLength: scaleX 
              }}
            />
          </svg>
          
          {/* Percentage Text */}
          <motion.span 
            className="relative text-sm font-light text-[var(--text-primary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
    </div>
  );
};
