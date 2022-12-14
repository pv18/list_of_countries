import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState} from 'react';

const regions = [
    'Asia',
    'Europe',
    'Africa',
    'Oceania',
    'Americas',
    'Antarctic',
    'Regions'
]

interface ICustomSelect {
    setRegion: (region: string) => void
}

export const CustomSelect = (props: ICustomSelect) => {
    const [title, setTitle] = useState<string>('')

    const handleChange = (event: SelectChangeEvent) => {
        props.setRegion(event.target.value as string);
        setTitle(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl size={'small'} fullWidth>
                <InputLabel id="demo-simple-select-label">Regions</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={title}
                    label={'Region'}
                    onChange={handleChange}
                >
                    {regions.map(name => (
                        <MenuItem key={crypto.randomUUID()} value={name}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
