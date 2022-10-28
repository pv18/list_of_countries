import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ICountries} from '../types/shared';

function createData(
    title?: string,
    value?: string,
) {
    return {title, value};
}

interface ICountryInfo {
    country?: ICountries
}

export const CountryInfo = ({country}: ICountryInfo) => {
    const rows = [
        createData('Official Name', country?.name.official),
        createData('Capital', country?.capital.toString()),
        createData('Continents', country?.continents.toString()),
        createData('Population', country?.population.toString()),
        createData('Population', country?.population.toString()),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 320}} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={crypto.randomUUID()}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">{row.title}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
