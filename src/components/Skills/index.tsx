import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/fade';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-b from-background to-background/80">
      <motion.div 
        className="container mx-auto px-4 pt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-32 text-foreground relative z-20">
          Skills & Expertise
        </h2>
        
        <div className="relative h-[300px] w-full">
          {/* FloatingCards are now managed by the Hero section */}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
