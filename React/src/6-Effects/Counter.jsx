import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(
        function MyEffect() {
            console.log('useEffect called');
        },
        [count]
    );

    const increment = () => {
        setCount(c => c + 1);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <p>Name: {name} </p>
            <input value={name} onChange={handleChange} type="text" />
        </div>
    )

}

export default Counter;