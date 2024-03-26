// https://mui.com/material-ui/

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';

export default function ButtonComponent() {
    return (
        <div>
            <Button variant="contained">Contained</Button>
            <Button variant="text">Contained</Button>
            <Button color="success" variant="outlined" size="small">Contained</Button>
            <Button color="error" variant="contained" size="medium">Contained</Button>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
        </div>
    );
}