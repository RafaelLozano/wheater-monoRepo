const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': '9cba21dc11mshe60c8bb47434959p1b9b03jsn2510823d8c7d'
  }
};
const getWeatherFrom = (query = 'Mexico') => {
  return fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    FETCH_OPTIONS
  );
};
export { getWeatherFrom };
