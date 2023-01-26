import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export const AnimatedSphere = () => {
  return <Sphere args={[1, 100, 200]} scale={2}>
    <MeshDistortMaterial 
      color="#8352FD"
      attach="material"
      distort={0.4}
      speed={3}
      roughness={0}
    />
  </Sphere>;
};
