export function controlFrames(framerate: number, count: number, setCount: any) {
    const COUNT_MAX = 100;
    const COUNT_MIN = 0;

    const timer = setTimeout(() => {
        setCount(count + 1);
        if(count > COUNT_MAX) {
            setCount(COUNT_MIN);
        }
    }, framerate);

    return timer;
}