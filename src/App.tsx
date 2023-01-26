import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import "./App.css";
import { Box, AnimatedSphere, StandardSphere, ShinRamyun } from "./components";

import { OrbitControls } from "@react-three/drei";

function App() {
  //create an additional canvas to separate 3d objects
  return (
    <div className="App">
      <h1>Using Three.js</h1>
      <p>Adding another dimension to web development.</p>
      <Flex>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          {/* <directionalLight position={[1, -5, 0]} intensity={1} /> */}
          <Suspense fallback={null}>
            <Box />
            <StandardSphere />
          </Suspense>
        </Canvas>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={0.5} />
          <Suspense fallback={null}>
            <ShinRamyun />
          </Suspense>
        </Canvas>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 4, 3]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </Flex>
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  margin-top: 64px;
`;

export default App;
