import React, {useContext} from 'react';
import Container from '@mui/material/Container';
import {CountriesList} from '../components/CountriesList';
import {CountriesFilters} from '../components/CountriesFilters';
import {Pagination} from '@mui/material';
import {CountriesContext} from '../context/CountriesContext';

export const Home = () => {
    const {page, pagesCount, setPage} = useContext(CountriesContext)

    return (
        <Container>
            <CountriesFilters/>
            <CountriesList/>
            <Pagination
                style={{display: 'flex', justifyContent: 'center', margin: 20}}
                page={page}
                onChange={(_, value) => setPage(value)}
                count={pagesCount}
                variant={'outlined'}
                shape={'rounded'}
                color={'primary'}
            />
        </Container>
    );
};

