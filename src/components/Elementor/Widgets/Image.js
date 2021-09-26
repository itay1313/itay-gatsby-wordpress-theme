import * as React from "react"

const Image = ({ settings, id }) => {
    const image = settings.image
    console.log('image', settings)
    return (
        <img key={id} src={image.url} alt={image.alt} />
    )
}

export default Image