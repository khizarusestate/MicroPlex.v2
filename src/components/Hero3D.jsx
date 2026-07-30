import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";

function DistortedCore() {
  const meshRef = useRef(null);
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.22;
    }
    if (groupRef.current) {
      // subtle parallax toward the pointer, spring back smoothly
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.3;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron ref={meshRef} args={[1.6, 4]}>
        <MeshDistortMaterial
          color="#5A8EF6"
          emissive="#49D9E8"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.6}
          distort={0.45}
          speed={1.6}
          wireframe
        />
      </Icosahedron>
      <Icosahedron args={[1.6, 2]} scale={0.98}>
        <MeshDistortMaterial
          color="#D06AE8"
          transparent
          opacity={0.12}
          distort={0.6}
          speed={1.2}
        />
      </Icosahedron>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#49D9E8" />
        <pointLight position={[-4, -2, 2]} intensity={0.8} color="#D06AE8" />
        <Suspense fallback={null}>
          <DistortedCore />
        </Suspense>
      </Canvas>
    </div>
  );
}
