import * as React from "react"

const Heading = ({ settings }) => {
    console.log('header', settings);

    const elementTag = settings.header_size ?? 'h2';
    const fontSize = settings.size ?? '';
    const align = settings.align ?? 'left';

    return (
        React.createElement(elementTag, {
            className: [
                `font-${fontSize} text-${align}`
            ].join(' '),
            style: {
                fontSize
            }
        }, settings.title)
    )
}

export default Heading;