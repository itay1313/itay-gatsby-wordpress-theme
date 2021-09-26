import * as React from "react"
import { toPascalCase } from "../../utils/ucwordfirst"

import Image from "./Widgets/Image"
import Heading from "./Widgets/Heading"
import TextEditor from "./Widgets/TextEditor"
const elementorWidgets = {
    Image,
    Heading,
    TextEditor
}

const Widget = ({ id, elements, settings, widgetType }) => {

    if (elementorWidgets[toPascalCase(widgetType)]) {
        return React.createElement(
            elementorWidgets[toPascalCase(widgetType)],
            {
                settings, elements, widgetType, id
            }
        )
    }
    else {
        return (<h5>Not implemented yet {widgetType}</h5>)
    }

}

export default Widget;
