import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = (): void => {
        setCount(count + 1);
    }
    const decrement = (): void => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0)
        }
    }

    return (
        <div>
            <h1 className={classes.ttl}>{ count }</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
};

export default Counter;