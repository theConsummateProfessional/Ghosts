/*
* Controls how fast the framerate is
* @param framerate {number} the upper limit on the framerate
* @param count {number} the current count of the frame its on
* @param setCount {function} the effect function that changes frame count
* @return timeout feature that sets the framerate
*/
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