import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Search} from './Search';
import {CustomSelect} from './CustomSelect';
import {CountriesContext} from '../context/CountriesContext';

export const CountriesFilters = () => {
    const {search, setSearch, setRegion} = useContext(CountriesContext)

    return (
        <Grid container justifyContent={'space-around'}>
            <Grid style={{minWidth: 300}} item mt={4} xs={4}>
                <Paper elevation={10}>
                    <Search title={search} setTitle={setSearch}/>
                </Paper>
            </Grid>
            <Grid style={{minWidth: 300}} item mt={4} xs={4}>
                <Paper elevation={10}>
                    <CustomSelect setRegion={setRegion}/>
                </Paper>
            </Grid>
        </Grid>
    );
};

