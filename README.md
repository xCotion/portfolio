# Modern Portfolio Website

A modern, interactive portfolio website built with Next.js 13, Three.js, and cutting-edge web technologies.

## Tech Stack

### Programming Languages
- JavaScript (JS)
- TypeScript (TS)

### Frameworks
- React.js
- Next.js

### UI Components / Style Libraries
- shadcn/ui - Modern UI components
- Tailwind CSS - Utility-first CSS framework
- Aceternity UI - Interactive components and animations
- Framer Motion - Animation library
- clsx - Conditional class names
- tailwind-merge - Tailwind class merging

### Animation & Interaction Libraries
- Three.js - 3D graphics
- React Three Fiber - React renderer for Three.js
- React Three Drei - Useful helpers for React Three Fiber
- GSAP - Advanced animations
- Locomotive Scroll - Smooth scrolling
- Intersection Observer API - Scroll tracking

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         
│   ├── ui/             # shadcn/ui components
│   ├── three/          # Three.js components
│   └── animations/     # Animation components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Features

- Modern UI with shadcn/ui and Tailwind CSS
- Interactive 3D graphics with Three.js
- Smooth scrolling and animations
- Responsive design
- Dark mode support
- Type-safe development with TypeScript

## Development

To add new shadcn/ui components:
```bash
npx shadcn-ui@latest add [component-name]
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
