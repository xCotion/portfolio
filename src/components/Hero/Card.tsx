'use client';

import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';

interface CardProps {
  skill: {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    initialPosition: {
      x: number;
      y: number;
      z: number;
    };
  };
  scrollYProgress: MotionValue<number>;
  scale: MotionValue<number>;
}

export const Card = ({ skill, scrollYProgress, scale }: CardProps) => {
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [skill.initialPosition.x * 20, 0]));
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [skill.initialPosition.y * 20, 0]));
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [skill.initialPosition.z, 0]));
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [skill.initialPosition.z * -1, 0]));

  return (
    <motion.div
      style={{
        x,
        y,
        rotateX,
        rotateY,
        scale,
      }}
      className="glass-panel particle absolute left-0 top-0 flex h-[120px] w-[200px] transform-gpu flex-col justify-between rounded-xl p-6 elevated-panel"
      whileHover={{ 
        scale: 1.05,
        rotateX: 0,
        rotateY: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20
        }
      }}
    >
      <div className="text-2xl">{skill.icon}</div>
      <div>
        <h3 className="mb-1 text-base font-semibold text-[#F4F4F5]">{skill.title}</h3>
        <p className="text-sm text-[#A1A1AA]">{skill.description}</p>
      </div>
    </motion.div>
  );
};
