'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20 min-h-screen flex flex-col items-center justify-start">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-32 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A curated collection of technologies and tools I've mastered throughout my journey
          </p>
        </motion.div>
      </div>
      
      {/* Cards Container - The cards will be rendered by the Hero component */}
      <div className="w-full h-[500px] relative" />
    </section>
  );
};

export default Skills;
