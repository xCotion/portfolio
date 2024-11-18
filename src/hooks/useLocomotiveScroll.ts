'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface UseLocomotiveScrollOptions {
  smooth?: boolean;
  multiplier?: number;
  lerp?: number;
  class?: string;
  initCallback?: (scroll: LocomotiveScroll) => void;
}

export function useLocomotiveScroll({
  smooth = true,
  multiplier = 1,
  lerp = 0.1,
  class: className = 'data-scroll',
  initCallback,
}: UseLocomotiveScrollOptions = {}) {
  const scrollRef = useRef<HTMLElement | null>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth,
      multiplier,
      lerp,
      class: className,
    });

    if (initCallback && locomotiveScrollRef.current) {
      initCallback(locomotiveScrollRef.current);
    }

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, [smooth, multiplier, lerp, className, initCallback]);

  return { ref: scrollRef, locomotiveScroll: locomotiveScrollRef.current };
}
