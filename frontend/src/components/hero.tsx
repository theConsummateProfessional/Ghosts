import React from 'react';

import {useState} from 'react';

export default function Hero(props: any) {
    const [key, setKey] = useState<any>('');

    const handler = (event: any) => {
        console.log(event.key)
        setKey(event.key);
    }

    return (
        <div style={{
            width: '25px',
            height: '25px',
            backgroundColor: 'black',
            top: '50%',
            borderRadius: '50%'
        }}></div>
    )
}