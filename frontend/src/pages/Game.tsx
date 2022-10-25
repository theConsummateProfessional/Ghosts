import React, {useState} from 'react';

import Hero from '../components/hero';

//globals
let map: any = {};

export default function Game(props: any) {
    const GAME_LIMIT_X = props.width / 2;
    const GAME_LIMIT_Y = props.height / 2;

    const [key, setKey] = useState<any>({});

    const keyDownHandler = (event: any) => {
        map[event.key] = event.type == 'keydown'
        setKey(map);
    }
    const keyUpHandler = (event: any) => {
        delete map[event.key];
        setKey(map);
    }

    window.onkeydown = keyDownHandler;
    window.onkeyup = keyUpHandler;
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
                    <Hero keyInput={key} moveLimitX={GAME_LIMIT_X} moveLimitY={GAME_LIMIT_Y}/>
                </div>
            </div>
        </>
    )
}