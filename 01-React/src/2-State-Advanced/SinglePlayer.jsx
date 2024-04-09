export default function SinglePlayer(target) {
    const increment = () => {
        console.log("incrementing")
    }
    return (
        <div>
            <h1>Single Player: {target}</h1>
            <button onClick={increment}> +1 </button>
        </div>
    )
}