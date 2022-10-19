import { useState, useEffect } from 'react';

const useKeyPress = () => {
    const [keyPressed, setKeyPressed] = useState<string>("");

    const updateKeyPressed = (e: any) => {
        if(e.which === 87) {
            setKeyPressed(String.fromCharCode(e.keyCode));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', updateKeyPressed);

        return () => window.removeEventListener('keydown', updateKeyPressed);
    }, []);

    return keyPressed;
}

export default useKeyPress;