import React from 'react';

import {useState, useEffect, useRef} from "react";

export default function Lazer(props: any) {

    return (
        <div id="lazer" style={{
            width: '25px',
            height: props.distance + 'px',
            transform: "rotate(" + props.orientation + "deg)",
            backgroundColor: "black"
        }}></div>
    )
}