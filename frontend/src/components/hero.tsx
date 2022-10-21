import React from 'react';

import {useState, useEffect, useRef} from 'react';

import {KeyboardDirection} from "../utils/common/enums";

export default function Hero(props: any) {
    //constants
    const MOVE_PX = 10;
    const FRAMERATE = 20;
    const COUNT_MAX = 100;
    const COUNT_MIN = 0;

    //References
    const heroRef = useRef(null);

    //State
    const [count, setCount] = useState<number>(0);
    const [moveDown, setMoveDown] = useState<number>(0); //margin top
    const [moveUp, setMoveUp] = useState<number>(0); //margin bottom
    const [moveLeft, setMoveLeft] = useState<number>(0); //margin right
    const [moveRight, setMoveRight] = useState<number>(0); //margin left

    //Effects
    useEffect(() => {
        const hero: any = heroRef.current;

        const timer = setTimeout(() => {
            setCount(count + 1);
            if(count > COUNT_MAX) {
                setCount(COUNT_MIN);
            }
        }, FRAMERATE);

        let keyDict: any = props.keyInput;
       // console.log(keyDict)
        if(inKeyDict(keyDict, KeyboardDirection.Up.key, KeyboardDirection.Up.arrow)) {
            console.log("check")
        }

        //Up and down controls
        if(inKeyDict(keyDict, KeyboardDirection.Up.key, KeyboardDirection.Up.arrow) && inKeyDict(keyDict, KeyboardDirection.Down.key, KeyboardDirection.Down.arrow)) {
            //Does nothing
        }else if (inKeyDict(keyDict, KeyboardDirection.Up.key, KeyboardDirection.Up.arrow)) {
            setMoveUp(moveUp + MOVE_PX);
            setMoveDown(moveDown - MOVE_PX);
        }else if (inKeyDict(keyDict, KeyboardDirection.Down.key, KeyboardDirection.Down.arrow)) {
            setMoveDown(moveDown + MOVE_PX);
            setMoveUp(moveUp - MOVE_PX);
        }

        //Left and right controls
        if(inKeyDict(keyDict, KeyboardDirection.Left.key, KeyboardDirection.Left.arrow) && inKeyDict(keyDict, KeyboardDirection.Right.key, KeyboardDirection.Right.arrow)) {
            //Does nothing
        }else if(inKeyDict(keyDict, KeyboardDirection.Left.key, KeyboardDirection.Left.arrow)) {
            setMoveLeft(moveLeft + MOVE_PX);
            setMoveRight(moveRight - MOVE_PX);
        }else if(inKeyDict(keyDict, KeyboardDirection.Right.key, KeyboardDirection.Right.arrow)) {
            setMoveRight(moveRight + MOVE_PX);
            setMoveLeft(moveLeft - MOVE_PX);
        }

        return () => clearTimeout(timer);
    }, [count])

    //scope functions
    function inKeyDict(keyDict: any, key: string, arrow: string) {
        return keyDict[key] || keyDict[arrow];
    }

    return (
        <div id="hero" style={{
            width: '25px',
            height: '25px',
            backgroundColor: 'black',
            borderRadius: '50%',
            marginTop: moveDown + 'px',
            marginBottom: moveUp + 'px',
            marginRight: moveLeft + 'px',
            marginLeft: moveRight + 'px'
        }} ref={heroRef}></div>
    )
}