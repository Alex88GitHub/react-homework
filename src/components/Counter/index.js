import { useState } from "react";

const Counter = () => {
   const [value, setValue] = useState(0);

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue((prevValue) => prevValue + 1)}>Увеличить на 1</button>
            <button onClick={() => setValue((prevValue) => prevValue - 1)}>Уменьшить на 1</button>
        </div>
    );
};

export default Counter;