import * as React from "react"
import { toPascalCase } from "../../utils/ucwordfirst"
import * as components from "./index"

import Section from './Section'
import Column from "./Column"
import Widget from './Widget'

const elementorComponents = {
    Section,
    Column,
    Widget,
}
const ChildRenderer = ({ elements, id }) => {
    return (
        <div key={id} >
            {
                elements.map(item => {
                    console.log(toPascalCase(item.elType))

                    if (elementorComponents[toPascalCase(item.elType)])
                        return React.createElement(
                            elementorComponents[toPascalCase(item.elType)],

                            {
                                id: item.id,
                                ...item
                            }
                        )
                    else {
                        return (<h5>Not implemented yet {item.widgetType}</h5>)
                    }
                }
                )
            }
        </div>
    )
}

export default ChildRenderer