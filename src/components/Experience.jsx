import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./office";
import { Overlay } from "./overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
