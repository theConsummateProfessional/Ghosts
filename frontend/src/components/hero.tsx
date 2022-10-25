import React from 'react';
import Lazer from '../components/lazer';

import {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../hooks/useMousePosition"

import {KeyboardDirection} from "../utils/common/enums";
import {controlFrames} from "../utils/common/frames";

export default function Hero(props: any) {
    //constants
    const MOVE_PX = 10;
    const FRAMERATE = 15;

    //References
    const heroRef = useRef(document.createElement("div"));

    //Move and frame state
    const [count, setCount] = useState<number>(0);
    const [moveDown, setMoveDown] = useState<number>(0); //margin top
    const [moveUp, setMoveUp] = useState<number>(0); //margin bottom
    const [moveLeft, setMoveLeft] = useState<number>(0); //margin right
    const [moveRight, setMoveRight] = useState<number>(0); //margin left

    //Mouse and lazer state
    const {mouseX, mouseY} = useMousePosition();
    const clicked = mouseX ? true : false;
    const [lazerDistance, setLazerDistance] = useState(0);
    const [lazerOrientation, setLazerOrientation] = useState(0);

    //Effects
    useEffect(() => {
        const timer = controlFrames(FRAMERATE, count, setCount);

        let keyDict: any = props.keyInput;

        //Up and down controls
        if(inKeyDict(keyDict, KeyboardDirection.Up.key, KeyboardDirection.Up.arrow) && inKeyDict(keyDict, KeyboardDirection.Down.key, KeyboardDirection.Down.arrow)) {
            //Does nothing
        }else if (inKeyDict(keyDict, KeyboardDirection.Up.key, KeyboardDirection.Up.arrow) && (moveUp < props.moveLimitY)) {
            setMoveUp(moveUp + MOVE_PX);
            setMoveDown(moveDown - MOVE_PX);
        }else if (inKeyDict(keyDict, KeyboardDirection.Down.key, KeyboardDirection.Down.arrow) && (moveDown < props.moveLimitY)) {
            setMoveDown(moveDown + MOVE_PX);
            setMoveUp(moveUp - MOVE_PX);
        }

        //Left and right controls
        if(inKeyDict(keyDict, KeyboardDirection.Left.key, KeyboardDirection.Left.arrow) && inKeyDict(keyDict, KeyboardDirection.Right.key, KeyboardDirection.Right.arrow)) {
            //Does nothing
        }else if(inKeyDict(keyDict, KeyboardDirection.Left.key, KeyboardDirection.Left.arrow) && (moveLeft < props.moveLimitX)) {
            setMoveLeft(moveLeft + MOVE_PX);
            setMoveRight(moveRight - MOVE_PX);
        }else if(inKeyDict(keyDict, KeyboardDirection.Right.key, KeyboardDirection.Right.arrow) && (moveRight < props.moveLimitX)) {
            setMoveRight(moveRight + MOVE_PX);
            setMoveLeft(moveLeft - MOVE_PX);
        }

        return () => clearTimeout(timer);
    }, [count])

    useEffect(() => {
        // console.log(heroRef.current.offsetLeft)
        const x = heroRef.current.offsetLeft;
        const y = heroRef.current.offsetTop;

        if(mouseX) {
            setLazerDistance(getDistance(x, y, mouseX, mouseY));
            setLazerOrientation(-1*getOrientation(x, y, mouseX, mouseY));
        }
    })

    //scope functions
    function inKeyDict(keyDict: any, key: string, arrow: string) {
        return keyDict[key] || keyDict[arrow];
    }

    function getDistance(x1: number, y1: number, x2: number, y2: number) {
        let xDiff: number = x1 - x2;
        let yDiff: number = y1 - y2;

        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    function getOrientation(x1: number, y1: number, x2: number, y2: number) {
        return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    }

    return (
        <>
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
            {clicked ? <Lazer distance={lazerDistance} orientation={lazerOrientation}></Lazer>: null}
        </>
    )
}