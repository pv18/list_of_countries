import React from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useAppSelector} from '../hooks/hooks';
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

export const Details = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const country = useAppSelector(state => state.countries.list).find(c => c.name.common === searchParams.get('country'))
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
            <Card elevation={24} sx={{maxWidth: 360}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="230"
                        image={country && country.flags.svg}
                        alt={country && country.name.common}
                    />
                    <Divider/>
                    <CardContent>
                        <Typography variant="h4" component="div" textAlign={'center'}>
                            {country && country.name.common}
                        </Typography>
                        <List sx={styleList}>
                            <ListItem>
                                <ListItemText primary="Capital"/>
                                <Typography variant="subtitle2">
                                    {country && country.capital[0]}
                                </Typography>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary="Population"/>
                                <Typography variant="subtitle2">
                                    {country && country.population}
                                </Typography>
                            </ListItem>
                            <Divider light/>
                            <ListItem divider>
                                <ListItemText primary="Continent"/>
                                <Typography variant="subtitle2">
                                    {country && country.continents.toString()}
                                </Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant={'contained'} onClick={clickHandler} startIcon={<ArrowBackIcon/>}>
                        Back
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}


