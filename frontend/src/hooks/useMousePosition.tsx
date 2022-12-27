import { useState, useEffect } from "react";

/*
* useMousePosition effect, returns mousepos when clicked
* @return {object} returns x and y of current location of clicked mouse
*/
export const useMousePosition = () => {
    const [mousePos, setMousePos] = useState<any>({x: null, y: null});

    const updateMousePosition = (e: any) => {
        if(e.which == 1) {
            setMousePos({mouseX: e.pageX, mouseY: e.pageY});
        } else {
            setMousePos({mouseX: null, mouseY: null});
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePos;
};