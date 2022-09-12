import React, {useState} from 'react';
import {Heading} from './components/Heading';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Container, Grid, Paper} from '@mui/material';
import {Search} from './components/Search';
import {CustomSelect} from './components/CustomSelect';


const App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Heading darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)}/>
            <Container>
                <Grid container justifyContent={'space-around'}>
                    <Grid style={{minWidth:300}} item mt={3} xs={4}>
                        <Paper elevation={10}>
                            <Search/>
                        </Paper>
                    </Grid>
                    <Grid style={{minWidth:300}} item mt={3} xs={4}>
                        <Paper elevation={10}>
                            <CustomSelect/>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container>

                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default App;