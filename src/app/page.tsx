'use client';

import { Hero } from '@/components/Hero/Hero';
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <ScrollProgress />
      <Hero />
      <Skills />
    </main>
  );
}
