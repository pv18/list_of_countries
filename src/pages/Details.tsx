import React from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useAppSelector} from '../hooks/hooks';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {CardActions, List, ListItem, ListItemText, Paper} from '@mui/material';
import Divider from '@mui/material/Divider';

export const Details = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const country = useAppSelector(state => state.countries.list).find(c => c.name === searchParams.get('country'))
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(-1)
    }

    const styleList = {
        width: '100%',
        // maxWidth: 360,
        marginTop: 2,
        bgcolor: 'background.paper',
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', padding: '40px'}}>
            <Card elevation={24} sx={{ maxWidth: 360 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={country && country.flag}
                        alt={country && country.name}
                    />
                    <CardContent>
                        <Typography variant="h4" component="div" textAlign={'center'}>
                            {country && country.name}
                        </Typography>
                        <List sx={styleList} >
                            <ListItem>
                                <ListItemText primary="Inbox" />
                                asdfasdf
                            </ListItem>
                            <Divider />
                            <ListItem divider>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Trash" />
                            </ListItem>
                            <Divider light />
                            <ListItem>
                                <ListItemText primary="Spam" />
                            </ListItem>
                        </List>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant={'contained'} onClick={clickHandler} startIcon={<ArrowBackIcon />}>
                        Back
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}


