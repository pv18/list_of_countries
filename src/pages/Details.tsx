import React, {useContext, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {CountriesContext} from '../context/CountriesContext';

export const Details = () => {
    const {countries} = useContext(CountriesContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const country = countries.find(c => c.name.common === searchParams.get('country'))
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(-1)
    }

    const styleList = {
        width: '100%',
        marginTop: 2,
        bgcolor: 'background.paper',
    };

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
                        <List sx={styleList}>
                            <ListItem>
                                <ListItemText primary="Capital"/>
                                <Typography variant="subtitle2">
                                    {country?.capital[0]}
                                </Typography>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary="Population"/>
                                <Typography variant="subtitle2">
                                    {country?.population}
                                </Typography>
                            </ListItem>
                            <Divider light/>
                            <ListItem divider>
                                <ListItemText primary="Continent"/>
                                <Typography variant="subtitle2">
                                    {country?.continents.toString()}
                                </Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        variant={'contained'}
                        onClick={clickHandler}
                        startIcon={<ArrowBackIcon/>}
                    >
                        Back
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}


