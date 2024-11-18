'use client';

import { motion } from 'framer-motion';

const code = `// Welcome to my portfolio!
const ashton = {
  role: "Full Stack Developer",
  location: "San Francisco Bay Area",
  skills: [
    "TypeScript",
    "React",
    "Node.js",
    "Swift",
    "Python",
  ],
  passions: [
    "UI/UX Design",
    "Motion Graphics",
    "AI Integration",
  ],
};`;

export const CodeWindow = () => {
  return (
    <motion.div
      className="glass-panel elevated-panel relative w-full max-w-[500px] overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.03)] px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="ml-2 text-sm text-[var(--text-secondary)]">portfolio.ts</div>
      </div>
      
      <div className="bg-[rgba(0,0,0,0.3)] p-6">
        <pre className="font-mono text-sm leading-relaxed">
          <code>
            {code.split('\n').map((line, i) => {
              // Add syntax highlighting
              const highlightedLine = line
                .replace(/(\/\/.+)$/g, '<span class="text-[#6B7280]">$1</span>')
                .replace(/(".*?")/g, '<span class="text-[#50FA7B]">$1</span>')
                .replace(/\b(const|let|var)\b/g, '<span class="text-[#FF79C6]">$1</span>')
                .replace(/({|}|\[|\]|,)/g, '<span class="text-[#BD93F9]">$1</span>');
                
              return (
                <div 
                  key={i} 
                  className="whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: highlightedLine }}
                />
              );
            })}
          </code>
        </pre>
      </div>
    </motion.div>
  );
};
