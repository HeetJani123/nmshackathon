import { Point, Points } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import React from 'react'

function Particles({ size = 5000 }) {
  const { width, height } = useThree((state) => state.viewport)

  return (
    <>
      <Points limit={size}>
        <pointsMaterial size={0.05} vertexColors emissive="blue" emissiveIntensity="2"/>
        {Array.from({ length: size }).map((_, i) => (
          <Point
            key={i}
            position={[(0.5 - Math.random()) * width * 2, 0.5 * height + Math.random() ** 0.25 * height * -3, (0.5 - Math.random()) * 25]}
            color={"#02d5fa"}
          />
        ))}
      </Points>
      
      {/* Apply bloom/glow effect */}
      <EffectComposer>
        <Bloom intensity={2.5} luminanceThreshold={2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  )
}

export { Particles }
