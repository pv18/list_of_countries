import {createAsyncThunk, PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICountries} from '../../types/shared';
import {ALL_COUNTRIES} from '../../api/api';
import axios from 'axios';

type CountriesState = {
    list: ICountries[]
    loading: boolean
    error: null | string
}

const initialState: CountriesState = {
    list: [],
    loading: false,
    error: null
}

export const fetchCountries = createAsyncThunk<ICountries[]>(
    'countries/fetchCountries',
    async () => {
        const {data} = await axios.get(ALL_COUNTRIES)
        return data
    }
)

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending,(state, action) => {
                state.list = []
                state.loading = true
                state.error = null
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
    }
})

export default countriesSlice.reducer