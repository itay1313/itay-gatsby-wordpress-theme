import React, { useEffect, useRef } from "react"
import Image from "../image"
// import { Link } from "gatsby"
import Parallax from "parallax-js"
import imageMe from "../../images/sm.jpeg"

const AboutMe = () => {
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
    <div className="hero min-h-screen">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Hello <br></br>
            I'm Itay Haephrati
          </h1>
          <p className="mb-5">I design and build things for the web.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div ref={sceneEl}>
          <img
            data-depth="0.10"
            src={imageMe}
            alt="imageme"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
