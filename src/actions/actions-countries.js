export const GET_COUNTRIES = 'GET_COUNTRIES'; // wszystkie państwa
export const GET_COUNTRY = 'GET_COUNTRY'; // info o jednym państwie
export const DELETE_COUNTRY = 'DELETE_COUNTRY'; // usuwanie państwa
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'; // szukanie państwa
export const SET_CONTINENT = 'SET_CONTINENT'; // państwa danego kontynentu


export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}

export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}

export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}
