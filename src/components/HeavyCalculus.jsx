import { useMemo, useState } from "react";

export const HeavyCalculus = () => {
    const [numberList, setNumberList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
    const [show, setShow] = useState(true);
    const getCalculus = (numberList) =>
        useMemo(() => {
            console.log("Calculating");
            return numberList.reduce((a, b) => a * b);
        }, [numberList]);
    const addNumber = () => {
        setNumberList([...numberList, numberList[numberList.length - 1] + 1]);
        console.log(numberList);
    };

    return (
        <>
            <h1>Calculus: </h1>
            <p>{getCalculus(numberList)}</p>

            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                {show ? "Show" : "Hide"}
            </button>
            <button className="btn btn-primary" onClick={() => addNumber()}>
                Add Number
            </button>
        </>
    );
};
