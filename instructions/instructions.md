# Project Overview
A modern, interactive portfolio website built with Next.js 13+ and cutting-edge web technologies.

# Core Functionalities
1. Interactive 3D Elements with Three.js
2. Smooth Animations & Transitions
3. Responsive Design
4. Modern UI Components

# Documentation

## Programming Languages
* JavaScript (JS)
* TypeScript (TS)

## Frameworks
* React.js
* Next.js

## UI Components / Style Libraries
* shadcn/ui
* Tailwind CSS
* Aceternity UI (for animations and interactive components)
* Framer Motion (for animations)
* clsx (for conditional class names)
* tailwind-merge (for merging Tailwind classes)

## Animation & Interaction Libraries
* Three.js (for 3D graphics)
* React Three Fiber (React renderer for Three.js)
* React Three Drei (useful helpers for React Three Fiber)
* GSAP (for advanced animations)
* Locomotive Scroll (for smooth scrolling)
* Intersection Observer API (for scroll tracking)

## Package Managers
* npm
* npx

# Important Implementation Details

## Project Structure
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── ui/          # UI components
│   │   ├── three/       # Three.js components
│   │   └── animations/  # Animation components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── public/              # Static assets
└── instructions/        # Project documentation

## Development Setup
1. Clone the repository
```bash
git clone [repository-url]
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
npm start
```

## Best Practices
- Use TypeScript for type safety
- Follow component-based architecture
- Implement responsive design
- Optimize performance
- Ensure accessibility
- Write clean, maintainable code