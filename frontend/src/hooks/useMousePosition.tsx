import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePos, setMousePos] = useState<any>({x: null, y: null});

    const updateMousePosition = (e: any) => {
        if(e.which == 1) {
            setMousePos({x: e.pageX, y: e.pageY});
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePos;
};

export default useMousePosition;