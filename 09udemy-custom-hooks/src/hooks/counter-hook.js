import { useState, useEffect } from 'react';

const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          forward ? setCounter((prevCounter) => prevCounter + 1) : setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}
export default useCounter;