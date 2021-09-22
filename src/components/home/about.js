import React, { useEffect, useRef } from "react"

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
          <h2 className="mb-5 text-5xl font-bold">About Me</h2>
          <p className="mb-5">
            A creative web developer & designer based in Tel Mond, Israel.
            specialized in delivering exceptional, high quality websites and web
            applications.
          </p>
        </div>
        <div ref={sceneEl}>
          <img
            data-depth="0.90"
            src={imageMe}
            alt="imageme"
            className="lg:max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
