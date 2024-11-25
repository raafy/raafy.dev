"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/logo.gltf");
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={[2, 2, 2]}
      rotation={[0, 0, 0]}
    />
  );
}

function StaticCamera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(2, 2, 4);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

export default function Logo() {
  return (
    <Canvas style={{ flex: 1 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <StaticCamera />
    </Canvas>
  );
}
