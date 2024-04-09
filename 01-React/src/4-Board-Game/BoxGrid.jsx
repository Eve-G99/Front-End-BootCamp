import Box from './Box';
import { useState } from 'react';

function BoxGrid() {
    const [boxes, setBoxes] = useState([false, false, true, false, false, true, false, false, false]);

    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false]);
    }

    const toggleBox = (idx) => {
        setBoxes((prev) => {
            return prev.map((value, i) => {
                if (idx === i) {
                    return !value;
                } else {
                    return value;
                }
            });
        })
    }

    return (
        <div className="BoxGrid">
            {boxes.map((b, idx) => (
                <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
            ))}
            <button onClick={reset}> Reset </button>
        </div>
    );
}

export default BoxGrid;