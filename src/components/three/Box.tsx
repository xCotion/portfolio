import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface BoxProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
}

export function Box({ 
  position = [0, 0, 0], 
  color = '#ffffff',
  scale = 1 
}: BoxProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[1 * scale, 1 * scale, 1 * scale]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
