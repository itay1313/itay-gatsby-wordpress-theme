import * as React from "react"

const Video = ({ settings, id }) => {
  const Video = settings.Video
  console.log("Video", settings)
  return (
    <div>
      {/* <h1>
        {" "}
        key={id} src={Video.url} alt={Video.alt}{" "}
      </h1> */}
    </div>
  )
}

export default Video
