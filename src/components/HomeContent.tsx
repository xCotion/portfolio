'use client';

import { Hero } from '@/components/Hero/Hero';
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress';
import Skills from '@/components/Skills';

export function HomeContent() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <ScrollProgress />
      <Hero />
      <Skills />
    </main>
  );
}
