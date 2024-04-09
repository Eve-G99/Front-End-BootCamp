import ColorBox from "./ColorBox";
import './ColorList.css';

function ColorList({ colors }) {
    const boxes =[];
    for (let i = 0; i < 25; i++){
        boxes.push(<ColorBox colors={colors}/>);
    }
    return(
        <div className="ColorList">
            {boxes}
        </div>
    )
}

export default ColorList;