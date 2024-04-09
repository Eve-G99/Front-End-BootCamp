export default function newClicker({ message, buttonText }) {

    // return (
    //     <button onClick={() => alert(message)}>{buttonText}</button>
    // )
    function handleClick(){
        alert(message);
    }
    return(
        <button onClick={handleClick}>{buttonText}</button>
    )
}