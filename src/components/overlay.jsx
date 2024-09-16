import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (

    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-black rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-6xl">
          Motion Artist
          </h1><br></br>
          <p className="text-3xl">Rushmil Goel</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
        <h1 className="font-semibold font-serif text-6xl">
        Design Architect
          </h1><br></br>
          <p className="text-3xl">Trisha Agrawal</p>
        </Section>
        <Section opacity={opacityLastSection}>
        <h1 className="font-semibold font-serif text-6xl">
          Content Lead
          </h1><br></br>
          <p className="text-3xl">Heet Jani</p>
        </Section>
      </div>
    </Scroll>
  );
};
