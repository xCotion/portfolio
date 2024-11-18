'use client';

import { motion, MotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Define types
interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Size3D {
  width: number;
  height: number;
  depth: number;
}

interface Skill {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  initialPosition: Point3D;
}

interface FloatingCardsProps {
  isSkillsSection?: boolean;
}

// Helper functions
const normalizeVector = (vector: Point3D): Point3D => {
  const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
  return {
    x: vector.x / length,
    y: vector.y / length,
    z: vector.z / length
  };
};

const crossProduct = (a: Point3D, b: Point3D): Point3D => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x
});

// Card component
function Card({ skill, otherSkills, scrollYProgress }: { 
  skill: Skill; 
  otherSkills: Skill[]; 
  scrollYProgress: MotionValue<number>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Calculate final positions based on index
  const index = skills.findIndex(s => s.id === skill.id);
  const isBackRow = index >= 3;
  const columnIndex = index % 3;
  const spacing = 320; // Spacing between cards
  
  // Center the cards horizontally and position them higher
  const finalX = (columnIndex - 1) * spacing; // Center 3 cards
  const finalY = -20; // Move cards up closer to the title
  const finalZ = isBackRow ? -200 : 0; // Back row positioned behind front row

  // Create spring animations for smoother transitions
  const springConfig = { 
    stiffness: 60,
    damping: 25,
    mass: 1.5,
    restDelta: 0.001
  };
  
  // Transform initial positions to final positions with optimized scroll range
  const progress = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Complete animation earlier
  
  // Smooth out the progress curve
  const smoothProgress = useSpring(progress, {
    stiffness: 40,
    damping: 30,
    mass: 2
  });

  // Create intermediate positions for a natural path
  const xProgress = useTransform(smoothProgress, [0, 0.3, 1], [0, 0.4, 1]);
  const yProgress = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.7, 1]);
  const zProgress = useTransform(smoothProgress, [0, 0.4, 1], [0, 0.5, 1]);
  
  // Calculate intermediate positions
  const xPath = useTransform(xProgress, [0, 1], [skill.initialPosition.x, finalX]);
  const yPath = useTransform(yProgress, [0, 1], [skill.initialPosition.y, finalY]);
  const zPath = useTransform(zProgress, [0, 1], [skill.initialPosition.z, finalZ]);
  
  // Apply spring animations to the paths
  const x = useSpring(xPath, springConfig);
  const y = useSpring(yPath, springConfig);
  const z = useSpring(zPath, springConfig);
  
  // Scale and opacity based on position
  const scale = useSpring(
    useTransform(smoothProgress, [0, 1], [1, isBackRow ? 0.9 : 1]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(smoothProgress, [0, 1], [1, isBackRow ? 0.6 : 1]),
    springConfig
  );

  // Initialize rotation values with gentler spring animations
  const rotationSpringConfig = {
    stiffness: 30,
    damping: 15,
    mass: 1.5
  };
  const rotateX = useSpring(0, rotationSpringConfig);
  const rotateY = useSpring(0, rotationSpringConfig);
  const rotateZ = useSpring(0, rotationSpringConfig);

  // Animation effect
  useEffect(() => {
    if (!isClient) return;

    const uniqueOffset = Math.random() * Math.PI * 2;
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      const elapsed = Date.now() * 0.001;
      const scrollValue = scrollYProgress.get();
      const amplitude = Math.max(0, 1 - scrollValue);

      if (amplitude > 0.1) {
        rotateX.set(Math.sin(elapsed * 0.15 + uniqueOffset) * 45 * amplitude);
        rotateY.set(Math.cos(elapsed * 0.2 + uniqueOffset) * 45 * amplitude);
        rotateZ.set(Math.sin(elapsed * 0.25 + uniqueOffset) * 25 * amplitude);
      } else {
        rotateX.set(0);
        rotateY.set(0);
        rotateZ.set(0);
      }

      timeoutId = setTimeout(animate, 16);
    };

    animate();
    return () => clearTimeout(timeoutId);
  }, [isClient, skill.id, rotateX, rotateY, rotateZ, scrollYProgress]);

  // Client-side initialization
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      ref={cardRef}
      style={{
        position: 'absolute',
        x,
        y,
        z,
        scale,
        opacity,
        rotateX,
        rotateY,
        rotateZ,
      }}
      className="w-[300px] z-0"
    >
      <motion.div
        className="relative h-[180px] w-[280px] cursor-pointer overflow-hidden rounded-xl"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ 
          scale: 1.1,
          transition: { type: 'spring', stiffness: 200, damping: 15 }
        }}
      >
        <div className="absolute inset-0 -z-10 transform translate-z-[-10px] bg-black/20 rounded-xl blur-sm" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute inset-0 rounded-xl border border-white/10" />
        
        <div className="relative flex h-full flex-col items-center justify-between p-6">
          <div className="text-3xl">{skill.icon}</div>
          <div className="text-center">
            <h3 className="mb-1 text-lg font-medium text-[var(--text-primary)]">
              {skill.title}
            </h3>
            <p className="mb-3 text-sm text-[var(--text-secondary)]">
              {skill.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Main component with client-side only rendering
const FloatingCardsWithNoSSR = ({ isSkillsSection = false }: FloatingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: document.documentElement,
    offset: ["start start", "end end"]
  });

  const [skillsSectionTop, setSkillsSectionTop] = useState(0);

  useEffect(() => {
    const updateSkillsPosition = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        setSkillsSectionTop(rect.top + window.scrollY);
      }
    };

    updateSkillsPosition();
    window.addEventListener('resize', updateSkillsPosition);
    window.addEventListener('scroll', updateSkillsPosition);

    return () => {
      window.removeEventListener('resize', updateSkillsPosition);
      window.removeEventListener('scroll', updateSkillsPosition);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full z-10"
      style={{ perspective: 1500 }}
    >
      <div 
        className="relative h-full w-full flex items-center justify-center" 
        style={{ transformStyle: 'preserve-3d' }}
      >
        {skills.map((skill) => (
          <Card 
            key={skill.id}
            skill={skill}
            otherSkills={skills.filter(s => s.id !== skill.id)}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

// Export with dynamic import and no SSR
export const FloatingCards = dynamic(() => Promise.resolve(FloatingCardsWithNoSSR), {
  ssr: false
});

// Skills data
const skills: Skill[] = [
  {
    id: 'ios',
    title: 'iOS Development',
    subtitle: 'Native apps with Swift & SwiftUI',
    icon: '📱',
    initialPosition: { x: -150, y: -150, z: -800 }  // Rightmost, closer
  },
  {
    id: 'creative',
    title: 'Creative Media',
    subtitle: '3D animations & interactive experiences',
    icon: '🎨',
    initialPosition: { x: -550, y: 50, z: -1200 }  // Further left, deeper
  },
  {
    id: 'ai',
    title: 'AI Integration',
    subtitle: 'Machine learning & neural networks',
    icon: '🤖',
    initialPosition: { x: -750, y: -50, z: -900 }  // Far left, medium depth
  },
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Modern web applications',
    icon: '🌐',
    initialPosition: { x: -450, y: 100, z: -1100 }  // Middle-left, deep
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    subtitle: 'Scalable cloud solutions',
    icon: '☁️',
    initialPosition: { x: -650, y: -200, z: -700 }  // Far left, closest
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    subtitle: 'Intuitive user experiences',
    icon: '✨',
    initialPosition: { x: -350, y: 0, z: -1000 }  // Middle, medium depth
  }
];
