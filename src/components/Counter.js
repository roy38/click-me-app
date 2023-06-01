import { useState, useEffect } from "react";

const Counter = () => {

    // State to store count value
    const [count, setCount] = useState(0);
    const [resCount, setResCount] = useState({});

    // Function to increment count by 1
    const incrementCount = async () => {
        setCount(count + 1);
    };

    return (
        <div id="click-btn-container">
            <div className="click-btn-container">
                <div className="click-counter">
                    <h1>{count}</h1>
                    </div>
                <button onClick={incrementCount}>Click Me!</button>
            </div>
        </div>
    );

}

export default Counter;
