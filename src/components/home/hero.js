import React, { useEffect, useRef } from "react"
// import { Link } from "gatsby"
import Parallax from "parallax-js"

const Hero = () => {
  // Parallax actives
  const sceneEl = useRef(null)
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    })
    parallaxInstance.enable()
    return () => parallaxInstance.disable()
  }, [])

  return (
    <div className="hero min-h-screen bg-base-200 text-accent-content">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div ref={sceneEl}>
          <img
            data-depth="0.30"
            src="https://picsum.photos/id/1005/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="mb-5 text-5xl font-bold text-primary">
            Hello{" "}
            <span role="img" aria-label="jsx-ally/accessible emoji">
              👋
            </span>
            <br></br>
            I'm Itay Haephrati
          </h1>
          <p className="mb-5">I design and build things for the web.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
