import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import {CountriesContext} from '../context/CountriesContext';
import {CountryCard} from './CountryCard';

export const CountriesList = () => {
    const {countries} = useContext(CountriesContext)

    return (
        <Grid container spacing={3} justifyContent={'space-around'}>
            {countries.map(country => (
                <CountryCard
                    key={crypto.randomUUID()}
                    name={country.name.common}
                    flag={country.flags.svg}
                />
            ))}
        </Grid>
    );
};

