import React, {useEffect, useState} from 'react';
import {Container, Grid, Paper} from '@mui/material';
import {Search} from '../components/Search';
import {CustomSelect} from '../components/CustomSelect';
import {CountriesList} from '../components/CountriesList';
import {fetchCountries} from '../redux/slices/countriesSlice';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';

export const Home = () => {
    const [search, setSearch] = useState<string>('')
    const [region, setRegion] = useState<string>('')
    const countries = useAppSelector(state => state.countries.list)
    const dispatch = useAppDispatch()

    const handleSearch = (search: string, region: string) => {
        let data = [...countries]

        if (region) {
            data = region === 'Regions'
                ? data
                : data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        return data
    }

    const filteredCountries = handleSearch(search, region)

    useEffect(() => {
        if (!countries.length) dispatch(fetchCountries())
    }, [])
    console.log(countries)
    return (
        <Container>
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
            <Grid container>
                <CountriesList list={filteredCountries}/>
            </Grid>
        </Container>
    );
};

