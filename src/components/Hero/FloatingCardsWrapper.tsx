import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import FloatingCardsLoading from './FloatingCardsLoading';

// Dynamically import the client component with no SSR
const FloatingCards = dynamic(
  () => import('./FloatingCards').then(mod => mod.FloatingCards),
  {
    ssr: false,
    loading: () => <FloatingCardsLoading />
  }
);

interface FloatingCardsWrapperProps {
  isSkillsSection?: boolean;
}

export default function FloatingCardsWrapper({ isSkillsSection = false }: FloatingCardsWrapperProps) {
  // Use Suspense for loading state
  return (
    <Suspense fallback={<FloatingCardsLoading />}>
      <FloatingCards isSkillsSection={isSkillsSection} />
    </Suspense>
  );
}
