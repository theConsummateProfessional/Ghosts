import React from 'react';
import { useState, useEffect } from 'react';

import Hero from '../components/hero'

import useKeyPress from "../hooks/useKeyPress";

export default function Game(props: any) {
    let keyPress: string = useKeyPress();
    console.log(keyPress);
    const [top, setTop] = useState(50)

    useEffect(() => {
        console.log("In here")
        if(keyPress === 'w') {
            setTop(top + 1);
            console.log("hello")
        }
    }, [keyPress])


    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    height: props.height,
                    width: props.width,
                    border: '5px solid black',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Hero top={top}/>
                </div>
            </div>
        </>
    )
}