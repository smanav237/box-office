const BASE_URL = 'https://api/tvmaze.com'

const apiGet = async queryString =>{
    const response = await fetch(`${BASE_URL}${queryString}`);
    const body = await response.json();   //.json returns promise

    return body;
}

export const SearchForShows = query => apiGet(`/search/shows?q=${query}`)
export const SearchForPeople = query => apiGet(`/search/people?q=${query}`)
