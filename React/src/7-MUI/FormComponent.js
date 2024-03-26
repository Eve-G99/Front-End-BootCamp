import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function FormComponent() {
    const [name, setName] = useState("");
    const updateName = (e) => {
        setName(e.target.value)
    }
    const [volume, setVolume] = useState(30);

    const changeVolume = (e, newVal) => {
        setVolume(newVal);
    }

    return (
        <Box sx={{ border: "1px solid pink", p:10 }}>
            <h1>Now name is {name}</h1>
            <TextField
                id="outlined-basic"
                label="Puppy Name"
                placeholder='Enter puppy name'
                variant="outlined"
                value={name}
                onChange={updateName}
            />
            <h1>Volume now: {volume}</h1>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        </Box>
    );
}