import * as React from "react"
import ChildRenderer from "./ChildRenderer"

const Column = data => {
  const settings = data.settings
  const width = settings._column_size
  return (
    <div className={`col-${width}`}>
      <ChildRenderer {...data} />
    </div>
  )
}

export default Column
