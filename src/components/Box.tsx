import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Texture from "../assets/brick.png";

export const Box = () => {
  const colorMap = useLoader(TextureLoader, Texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" vertexColors/>
      {/* <meshStandardMaterial map={colorMap} /> */}
    </mesh>
  );
};
