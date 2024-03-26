import { useState } from "react"

export default function Counter() {
    console.log("RE-REDERED")
    const [count, setCount] = useState(0)
    const addThree = () => {
        setCount(currCount => currCount + 1);
        setCount(currCount => currCount + 1);
        setCount(currCount => currCount + 1);
    }
    const setTen = () => {
        setCount(10)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addThree}> +3 </button>
            <button onClick={setTen}> +10 </button>
        </div>
    )
}