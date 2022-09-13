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

interface IList {
    list: ICountries[]
}

export const CountriesList = (props: IList) => {
    return (
        <Grid container spacing={3} justifyContent={'space-around'}>
            {props.list.map(country => (
                <Grid style={{minWidth: 345}} key={crypto.randomUUID()} item xs={4} mt={6} lg={2}>
                    <Card sx={{maxWidth: 345}}>
                        <Paper elevation={24}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="160"
                                image={country.flag}
                                alt={country.name}
                            />
                            <CardContent>
                                <Divider />
                                <Typography variant="subtitle2" component="div" textAlign={'center'} mt={2}>
                                    {country.name}
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

