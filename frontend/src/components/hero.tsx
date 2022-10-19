import React from 'react';

export default function Hero(props: any) {
    console.log(props.top)
    return (
        <div style={{
            width: '25px',
            height: '25px',
            backgroundColor: 'black',
            top: props.top,
            borderRadius: '50%'
        }}></div>
    )
}