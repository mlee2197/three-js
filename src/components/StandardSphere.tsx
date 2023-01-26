import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export const StandardSphere = () => {
  return <Sphere args={[1, 100, 200]} scale={2} />;
};
