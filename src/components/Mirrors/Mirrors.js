import React from "react"

import { Canvas } from "react-three-fiber"
import Scene1 from "./Scene1"
const Mirrors = ({ props }) => {
  return (
    <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
      <color attach="background" args={["#000"]} />
      <Scene1 />
      <ambientLight intensity={0.4} />
    </Canvas>
  )
}

export default Mirrors
