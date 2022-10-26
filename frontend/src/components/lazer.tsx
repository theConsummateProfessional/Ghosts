import React from 'react';

export default function Lazer(props: any) {

    return (
        <div id="lazer" style={{
            position: 'absolute',
            left: props.x + 'px',
            top: props.y + 'px',
            width: '5px',
            height: props.distance + 'px',
            transform: "rotate(" + props.orientation + "deg)",
            transformOrigin: "0 0",
            backgroundColor: "black"
        }}></div>
    )
}