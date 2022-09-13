import React, {useState} from 'react';
import {Heading} from './components/Heading';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Paper} from '@mui/material';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Details} from './pages/Details';

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
            <Paper>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/country/:name" element={<Details/>}/>
                    <Route path="404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                    <Route path="*" element={<Navigate to={'/404'}/>}/>
                </Routes>

            </Paper>
        </ThemeProvider>
    );
};

export default App;