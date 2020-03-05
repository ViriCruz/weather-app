import domStuff from './dom-stuff';
import pexelsPhoto from './pexels-api/get-photo';

const loadJson = async (location, unitFormat='metric') => {
  const apikey = '1cd628f79e26ab86281a0d66e944dc4c';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${location}&units=${unitFormat}&appid=${apikey}`, { mode: 'cors' });
  if (response.ok) return await response.json();
  
  throw new Error(response.status);
};

const getWeather = async (location) => {
  let data;
  try {
    data = await loadJson(location);
    domStuff.clearError()
    domStuff.showWeather(data);
    pexelsPhoto();
  } catch (err) {
    domStuff.showError(err);
  }
};

const getTemperature = async (location, unitFormat) => {
  let data;
  try {
    data = await loadJson(location, unitFormat);
    domStuff.clearError()
    let unit = unitFormat === 'metric' ? 'C' : 'F' 
    domStuff.updateTemperature(data.list[0].main.temp, unit);
  } catch (err) {
    domStuff.showError(err);
  }
}


export default {
  getWeather,
  getTemperature
}

