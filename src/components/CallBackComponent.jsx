import { useCallback, useState } from "react";
import { Increment } from "./Increment";

export const CallBackComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback((val) => {
        setCounter((count) => count + val);
    }, []);

    return (
        <>
            <h1>Counter: {counter} </h1>
            <Increment increment={incrementFather}></Increment>
        </>
    );
};
