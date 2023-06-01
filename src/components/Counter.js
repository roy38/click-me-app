import { useState, useEffect } from "react";
import { insertCount, getCount, updateCount } from '../api/Counter';

const Counter = () => {

    // State to store count value
    const [count, setCount] = useState(0);
    const [resCount, setResCount] = useState({});

    // Using hook to fetch
    useEffect( () => {
        getCount().then( (res) => {
            if ( Object.keys(res.data).length > 0 ) {
                setCount(res.data.counts);
                setResCount(res.data);
            }
        });

        // console.log(count);
    }, [count]);

    // Function to increment count by 1
    const incrementCount = async () => {
        if (count > 0) {
            updateCount(resCount.id, count + 1).then( (res) => {
                setCount(count + 1);
            });
        } else {
            insertCount(count + 1).then( (res) => {
                setCount(count + 1);
            });
        }
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
