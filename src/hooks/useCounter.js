import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    };
    const decrement = (value = 1, negativo = true) => {
        ///quitar el true del negativo si no se quieren tener valores menores que cero
        if (!negativo && counter - value < 0) {
            setCounter(0);
            return;
        }
        setCounter(counter - value);
    };
    const reset = () => {
        setCounter(0);
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};
