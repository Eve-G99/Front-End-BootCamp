import { useState } from 'react';
import Rating from '@mui/material/Rating';

export default function RatingComponent() {
    const [value, setValue] = useState(2);

    return (
        <div>
            <h1>Current Score:{value}</h1>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    );
}