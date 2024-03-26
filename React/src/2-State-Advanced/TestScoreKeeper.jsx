import { useState } from "react"


export default function TestScoreKeeper({ numPlayers = 3, target = 10 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    // const incrementScore = (index) =>{
    //     setScores(prevScores =>{
    //         const copy = [...prevScores];
    //         copy[index] += 1;
    //         return copy;
    //     })
    // }

    const incrementScore = (index) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (i === index) return score + 1;
                return score;
            })
        })
    }

    const resetScore = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, index) => {
                    return (
                        <ul key={index}>
                            Player{index + 1} : {score}
                            <button onClick={() => incrementScore(index)}>+ 1</button>
                            {score >= target && "Winner!"}
                        </ul>
                    )
                })}
            </ul>
            <button onClick={resetScore}> Reset </button>
        </div>
    )
}