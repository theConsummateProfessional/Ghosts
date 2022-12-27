import React from 'react';

/*
* Lazer component to take coordinates and output a lazer
* @prop x {number} the number of the x coordinate of the start of the lazer
* @prop y {number} the number of the y coordinate of the start of the lazer
* @prop distance {number} the number of the distance between the two points
* @prop orientation {number} the number of the orientation between the two points
* @return the lazer component
*/
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