import { useState } from "react";

function generateGameBoard(){
    console.log("MAKING GAME BOARD");
    return Array(5000);
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard());
    return <button onClick={() => setBoard('hello!')}>Click me to change State! </button>
}