import elements from './dom-stuff';
import temperature from './temperature';

const getWeather = async (location) => {
  const apikey = '1cd628f79e26ab86281a0d66e944dc4c';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`, { mode: 'cors' });
  const data = await response.json();
  const temp = temperature();
  elements().currentTemp.textContent = `${temp.kelvinToCelsius(data.main.temp)} °C`;
  elements().description.textContent = data.weather[0].description;
  elements().icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

export default getWeather;
