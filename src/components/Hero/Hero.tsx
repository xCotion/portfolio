import { motion } from 'framer-motion';
import Link from 'next/link';
import { CodeWindow } from './CodeWindow';
import { FloatingCards } from './FloatingCards';

const HeroBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute top-[-25vh] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-gradient-radial from-[rgba(79,209,197,0.2)] via-[rgba(56,178,172,0.1)] to-transparent opacity-50 blur-[100px] particle" />
    <div className="absolute bottom-[-10%] right-[-5%] h-[40vw] w-[40vw] rounded-full bg-gradient-radial from-[rgba(44,122,123,0.2)] via-[rgba(44,122,123,0.1)] to-transparent opacity-50 blur-[100px] particle" />
    <div className="absolute left-[60%] top-[40%] h-[30vw] w-[30vw] rounded-full bg-gradient-radial from-[rgba(56,178,172,0.15)] via-[rgba(56,178,172,0.1)] to-transparent opacity-50 blur-[100px] particle" />
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
  </div>
);

const socialLinks = [
  { 
    name: 'GitHub',
    url: 'https://github.com/ashton',
    icon: '🌟'
  },
  { 
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ashton',
    icon: '💼'
  },
  { 
    name: 'Twitter',
    url: 'https://twitter.com/ashton',
    icon: '🐦'
  }
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      <HeroBackground />
      
      {/* Floating Cards Container - Positioned relative to viewport */}
      <FloatingCards />
      
      <div className="relative z-20 mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 items-center gap-16 px-8 py-20 md:grid-cols-2">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl">
            <span className="gradient-text">Crafting Digital</span>
            <br />
            Excellence
          </h1>
          
          <p className="max-w-[600px] text-[var(--text-secondary)] md:text-lg">
            Transforming ideas into elegant solutions through code and creativity
          </p>
          
          <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
            <span>iOS Development</span>
            <span className="text-[var(--accent-primary)]">•</span>
            <span>Creative Media</span>
            <span className="text-[var(--accent-primary)]">•</span>
            <span>AI Integration</span>
          </div>
          
          <div className="mt-4 flex gap-4">
            <Link href="/contact" className="button-primary">
              Get in Touch
            </Link>
            <Link href="/projects" className="button-secondary">
              View Projects
            </Link>
          </div>
          
          <div className="mt-4 flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-primary)]"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Right Column - Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
};
