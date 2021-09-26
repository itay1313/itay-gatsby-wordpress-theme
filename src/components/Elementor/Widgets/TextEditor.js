import * as React from "react"

const TextEditor = (data) => {
    const settings = data.settings
    return (<div dangerouslySetInnerHTML={{ __html: settings.editor }} />)
}

export default TextEditor