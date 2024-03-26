function handleClick() {
    console.log('Clicked!')
}

function handleHover(){
    console.log('Hovered!')

}

export function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover!!</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}