
const getWeather = async (location) => {
  const apikey = '1cd628f79e26ab86281a0d66e944dc4c';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`, { mode: 'cors' });
  const data = await response.json();
  return data;
};

export default getWeather;
