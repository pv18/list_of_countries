import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {ICountries} from '../types/shared';
import {useNavigate} from 'react-router-dom';

interface IList {
    list: ICountries[]
}

export const CountriesList = (props: IList) => {
    const navigate = useNavigate()

    const clickHandler = (country: string) => {
        navigate(`/details?country=${country}`)
    }

    return (
        <Grid container spacing={3} justifyContent={'space-around'}>
            {props.list.map(country => (
                <Grid style={{minWidth: 345}} key={crypto.randomUUID()} item xs={4} mt={6} lg={2}>
                    <Card sx={{maxWidth: 345}} onClick={() => clickHandler(country.name.common)}>
                        <Paper elevation={24}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={country.flags.svg}
                                    alt={country.name.common}
                                />
                                <CardContent>
                                    <Divider/>
                                    <Typography variant="subtitle2" component="div" textAlign={'center'} mt={2}>
                                        {country.name.common}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

