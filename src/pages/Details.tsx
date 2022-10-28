import React, {useContext} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import {CountriesContext} from '../context/CountriesContext';
import {CountryInfo} from '../components/CountryInfo';

export const Details = () => {
    const {countries} = useContext(CountriesContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const country = countries.find(c => c.name.common === searchParams.get('country'))
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(-1)
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', padding: '40px'}}>
            <Card elevation={24} sx={{maxWidth: 600}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={country?.flags.svg}
                        alt={country?.name.common}
                    />
                    <Divider/>
                    <CardContent>
                        <Typography variant="h4" component="div" textAlign={'center'}>
                            {country?.name.common}
                        </Typography>
                        <CountryInfo country={country}/>
                    </CardContent>
                </CardActionArea>
                <Button
                    size="large"
                    variant={'contained'}
                    onClick={clickHandler}
                    startIcon={<ArrowBackIcon/>}
                >
                    Back
                </Button>
            </Card>
        </Box>
    );
}


