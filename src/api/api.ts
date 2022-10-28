const API_URL = 'https://restcountries.com/v3.1/'

export const fetchCountries = () => {
    return fetch(API_URL + 'all')
        .then(response => response.json())
}




