import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';

interface ICountryCard {
    name: string
    flag: string
}

export const CountryCard = ({name,flag}:ICountryCard) => {
    const navigate = useNavigate()

    const clickHandler = (country: string) => {
        navigate(`/details?country=${country}`)
    }

    return (
        <Grid style={{minWidth: 350}} key={crypto.randomUUID()} item xs={4} mt={6} lg={2}>
            <Card sx={{width: 320}} onClick={() => clickHandler(name)}>
                <Paper elevation={24}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={flag}
                            alt={name}
                        />
                        <CardContent>
                            <Divider/>
                            <Typography variant="subtitle2" component="div" textAlign={'center'} mt={2}>
                                {name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Paper>
            </Card>
        </Grid>
    );
};

