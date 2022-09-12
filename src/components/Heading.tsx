import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {FormControlLabel, Switch} from '@mui/material';

interface IHeading {
    darkMode: boolean
    setDarkMode: () => void
}

export const Heading = (props: IHeading) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="subtitle1" component="div" sx={{flexGrow: 1}}>
                        HELLO WORLD!
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch checked={props.darkMode} onChange={() => props.setDarkMode()}/>
                        }
                        label={props.darkMode ? 'Dark Mode' : 'Light Mode'}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
