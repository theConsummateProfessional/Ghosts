import React from 'react';

import Hero from '../components/hero'

export default function Game(props: any) {
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
                    <Hero />
                </div>
            </div>
        </>
    )
}