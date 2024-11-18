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

# Color Guidelines

## Brand Colors

### Primary Colors
- **Background Colors**
  - Primary Background (Deep Charcoal): `#111111`
  - Secondary Background: `#1A1A1A`

### Text Colors
- **Text Hierarchy**
  - Primary Text (Crisp White): `#F4F4F5`
  - Secondary Text (Light Gray): `#D4D4D8`
  - Body Text (Medium Gray): `#A1A1AA`
  - Subtle Text (Darker Gray): `#71717A`

### Accent Colors
- **Slate Blues**
  - Light Slate: `#94A3B8`
  - Primary Slate: `#64748B`
  - Dark Slate: `#475569`

### Brand Accent Gradient
```css
background: linear-gradient(135deg,
  #4FD1C5 0%,    /* Bright Teal */
  #38B2AC 50%,   /* Mid Teal */
  #2C7A7B 100%   /* Professional Teal */
);
```

## Special Effects

### Glassmorphism
- Background: `rgba(255, 255, 255, 0.05)`
- Backdrop Filter: `blur(20px)`
- Border: `rgba(255, 255, 255, 0.1)`

### Gradient Spheres
- Teal Sphere: `rgba(79, 209, 197, 0.2)`
- Deep Teal Sphere: `rgba(44, 122, 123, 0.2)`
- Mid Teal Sphere: `rgba(56, 178, 172, 0.15)`

## Usage Guidelines

### Background Applications
- Use primary background (`#111111`) for main content areas
- Apply secondary background (`#1A1A1A`) for cards and elevated elements
- Implement glassmorphism for floating elements and modals

### Typography
- Use Primary Text (`#F4F4F5`) for headlines and important content
- Apply Secondary Text (`#D4D4D8`) for subheadings
- Use Body Text (`#A1A1AA`) for regular content
- Reserve Subtle Text (`#71717A`) for less important information

### Accent Usage
- Use teal gradient for primary CTAs and important interactive elements
- Apply slate blues for secondary interactions and hover states
- Implement gradient spheres sparingly as decorative elements

### Accessibility Notes
- Maintain WCAG 2.1 AA standard contrast ratios
- Ensure text remains readable on all background variations
- Provide sufficient color contrast for interactive elements

# User Experience Flow

## Hero Section Experience

### Initial Load
- **Hero Text**
  - Main Headline: "Crafting Digital Excellence"
  - Subtitle: "Transforming ideas into elegant solutions through code and creativity"
  - Specialties: "iOS Development • Creative Media • AI Integration"
  - Text Appearance: Crisp, commanding presence with perfect contrast against the background

### Floating Cards Animation
- **Initial State**
  - Position: Scattered in 3D space, predominantly on the left side
  - Movement: Independent, gentle drifting motions
  - Rotation: Slow, continuous 3D rotation showing all sides
  - Depth: ~10px thickness for authentic 3D appearance

### Card Design
- **Structure**
  - Top: Icon/visual element
  - Middle: Title (e.g., "iOS Development")
  - Bottom: Brief subtitle and "Learn More" button
  - Physical Properties: 3D depth with visible thickness
  - Material: Glassmorphic effect with subtle reflections

## Scroll Transition

### Animation Sequence
- **Trigger**: User scroll initiation
- **Card Movement**
  - Transform: From scattered floating state to organized carousel
  - Path: Unique, flowing trajectories for each card
  - Timing: Smooth, choreographed motion

### Skills Section Transformation
- **Final State**
  - Header: "Skills & Expertise Specialized in creating innovative solutions across multiple domains"
  - Layout: Three-card carousel view
  - Navigation: Subtle arrow buttons on both sides
  - Total Cards: 6 (navigable through carousel)
  - Movement: Subtle floating animation retained in carousel state

### Interactive Elements
- **Carousel Controls**
  - Arrow Buttons: Subtle yet visible navigation elements
  - Transition: Smooth card switching animation
  - State Indication: Visual feedback for current position

### Motion Design Notes
- Maintain fluid, space-like movement throughout
- Ensure transitions feel natural and unforced
- Balance between engaging motion and readability
- Implement reduced motion alternatives for accessibility