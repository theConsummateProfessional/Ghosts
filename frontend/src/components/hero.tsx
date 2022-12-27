import React from 'react';
import Lazer from '../components/lazer';

import {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../hooks/useMousePosition"

import {KeyboardDirection} from "../utils/common/enums";
import {controlFrames} from "../utils/common/frames";

/*
 * Returns position of hero
 * @prop keyInput {string} the character of the key being input
 * @prop moveLimitY {number} the limit on how much the hero can move vertically
 * @prop moveLimitX {number} the limit on how much the hero can move horizontally
 * @return Hero {Component}
*/
export default function Hero(props: any) {
    //constants
    const MOVE_PX = 10;
    const FRAMERATE = 15;
    const HERO_DIMS = 25 // only going with one for right now since it is a ball
    const LAZER_OFFSET = HERO_DIMS / 2;
    const ROTATION_OFFSET = 90;

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
    const [clicked, setClicked] = useState(false);
    const [lazerDistance, setLazerDistance] = useState(0);
    const [lazerOrientation, setLazerOrientation] = useState(0);
    const [lazerX, setLazerX] = useState(0);
    const [lazerY, setLazerY] = useState(0);

    //Effects
    /*
    * Movement Effect
    * @dep count {number} the count dependency that keeps control of framerame
    */
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

        return () => clearTimeout(timer); // eslint-disable-next-line
    }, [count])

    // eslint-disable-next-line
    /*
    * Lazer Effect
    */
    useEffect(() => {
        const x = heroRef.current.offsetLeft;
        const y = heroRef.current.offsetTop;

        if(mouseX) {
            setClicked(true);
            setLazerDistance(getDistance(x, y, mouseX, mouseY));
            setLazerOrientation(getOrientation(x, y, mouseX, mouseY) - ROTATION_OFFSET);
            setLazerX(x + LAZER_OFFSET);
            setLazerY(y + LAZER_OFFSET);
        } else {
            setClicked(false);
        }
    })

    //scope functions
    /*
    * Returns a boolean based on whether it is an arrow or alpha key
    * @param keyDict {any: dictionary} dictionary of key passed in
    * @param key {string} the key that is being pressed
    * @param arrow {string} the arrow that is being pressed
    * @return or {boolean} whether arrow or key in dictionary passed in
    */
    function inKeyDict(keyDict: any, key: string, arrow: string) {
        return keyDict[key] || keyDict[arrow];
    }

    /*
    * Function to get distanced between two points
    * @param x1 {number} first x coordinate
    * @param y1 {number} first y coordinate
    * @param x2 {number} second x coordinate
    * @param y2 {number} second y coordinate
    * @return --- the distance between two points
    */
    function getDistance(x1: number, y1: number, x2: number, y2: number) {
        let xDiff: number = x1 - x2;
        let yDiff: number = y1 - y2;

        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    /*
     * Function to get distanced between two points
     * @param x1 {number} first x coordinate
     * @param y1 {number} first y coordinate
     * @param x2 {number} second x coordinate
     * @param y2 {number} second y coordinate
     * @return --- the orientation of line between two points
     */
    function getOrientation(x1: number, y1: number, x2: number, y2: number) {
        return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    }

    return (
        <>
            <div id="hero" style={{
                width: HERO_DIMS + 'px',
                height: HERO_DIMS + 'px',
                backgroundColor: 'black',
                borderRadius: '50%',
                marginTop: moveDown + 'px',
                marginBottom: moveUp + 'px',
                marginRight: moveLeft + 'px',
                marginLeft: moveRight + 'px'
            }} ref={heroRef}></div>
            {clicked ? <Lazer distance={lazerDistance} orientation={lazerOrientation} x={lazerX} y={lazerY}></Lazer>: null}
        </>
    )
}