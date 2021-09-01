import React, { useState, useEffect } from "react";
import "./counter.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [countHistory, setCountHistory] = useState<Array<number>>([]);
    const [maxValue, setMaxValue] = useState(0);

    const incrementCounter = () => {
        setCount(prevCount => (prevCount + 1));
    }

    const decrementCounter = () => {
        if(count !== 0){
            setCount(prevCount => (prevCount - 1));
        }
    }

    const incrementFive = () => {
        setCount(prevCount => (prevCount + 5));
    }

    const decrementFive = () => {
        if( (count - 5) < 0){
            setCount(0);
        }else{
            setCount(prevCount => (prevCount - 5));
        }

    }

    useEffect(() => {
        // solution during interview
        // const prevHistory = [...countHistory];
        // prevHistory.push(count);
        // setCountHistory(prevHistory);

        // better approach
        setCountHistory(prevState => [...prevState, count]);
    }, [count]);

    useEffect(() => {
        if(countHistory.length){
            setMaxValue(Math.max(...countHistory));
        }
    }, [countHistory]);

    return(
        <div className="wrapper">
            <div className="current-count text-center">
                <h3>The current count is</h3>
                <h3 className="count">{count}</h3>
            </div>


            <div className="counter-btns">
                <button className="btn btn-primary" onClick={incrementCounter}>+1</button>
                <button className="btn btn-primary" onClick={incrementFive}>+5</button>
                <button className="btn btn-danger" onClick={decrementCounter}>-1</button>
                <button className="btn btn-danger" onClick={decrementFive}>-5</button>
            </div>

            <div className="counter-history text-center">
                <h3>Couner History:</h3>
                <ul className="clearfix">
                    {
                        countHistory.map((count, i) => (
                            <li key={`count-${i}-${count}`}>
                                {count}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="max-value text-center">
                <h3>Max Value:</h3>
                <h3 className="count">{maxValue}</h3>
            </div>
        </div>
    )
}

