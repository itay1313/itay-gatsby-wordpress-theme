import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Canvas } from "react-three-fiber"
import Scene1 from "../components/Mirrors/Scene1"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
      <color attach="background" args={["#000"]} />
      <Scene1 />
      <ambientLight intensity={0.4} />
    </Canvas>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
