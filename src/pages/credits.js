import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";

function Credit() {
  return (

    <Canvas style={{background: "linear-gradient(#d9afd9, #97d9e1"}}
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default Credit;