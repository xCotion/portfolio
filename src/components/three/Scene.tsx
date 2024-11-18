import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface SceneProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  controlsEnabled?: boolean;
}

export function Scene({ 
  children, 
  cameraPosition = [0, 0, 5],
  controlsEnabled = true 
}: SceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {children}
          {controlsEnabled && <OrbitControls />}
        </Suspense>
      </Canvas>
    </div>
  );
}
