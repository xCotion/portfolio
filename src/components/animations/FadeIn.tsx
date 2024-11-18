import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  direction = 'up',
  duration = 1,
  delay = 0,
  className = '',
}: FadeInProps) {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = element.current;
    if (!el) return;

    const directionValues = {
      up: { y: 50 },
      down: { y: -50 },
      left: { x: 50 },
      right: { x: -50 },
    };

    const initialPosition = directionValues[direction];

    gsap.fromTo(
      el,
      {
        opacity: 0,
        ...initialPosition,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [direction, duration, delay]);

  return (
    <div ref={element} className={className}>
      {children}
    </div>
  );
}
