import React, {createContext, useEffect, useMemo, useState} from 'react';
import {ICountries} from '../types/shared';
import {fetchCountries} from '../api/api';

const PER_PAGE = 6

interface ICountriesContext {
    countries: ICountries[]
    search: string
    region: string
    page: number
    pagesCount: number
    setSearch: (value: string) => void
    setRegion: (newRegion: string) => void
    setPage: (page: number) => void
}

const CountriesContext = createContext<Required<ICountriesContext>>({} as ICountriesContext)

const CountriesProvider = (props: any) => {
    const [countries, setCountries] = useState<ICountries[]>([]);
    const [search, setSearch] = useState<string>('')
    const [region, setRegion] = useState<string>('')
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        if (!countries.length) {
            fetchCountries().then((data) => {
                setCountries(data)
            })
        }
    }, [])

    const filteredCountries = useMemo(() => {
        let data = [...countries]

        if (region) {
            data = region === 'Regions'
                ? data
                : data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
        }

        return data
    }, [countries, search, region])

    const queriedCountries = useMemo(() => {
        return filteredCountries.slice((page - 1) * PER_PAGE, PER_PAGE * page)
    }, [filteredCountries, page])

    const pagesCount = useMemo(() => {
        return Math.ceil(filteredCountries.length / PER_PAGE)
    }, [filteredCountries.length])

    return (
        <CountriesContext.Provider
            value={{
                countries: queriedCountries,
                search,
                region,
                setSearch,
                setRegion,
                page,
                pagesCount,
                setPage,
            }}
        >
            {props.children}
        </CountriesContext.Provider>
    );
};

export {CountriesContext, CountriesProvider}

