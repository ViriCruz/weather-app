import temp from './temperature';
import domStuff from './dom-stuff';
import pexelsPhoto from './pexels-api/get-photo';

const loadJson = async (location) => {
  const apikey = '1cd628f79e26ab86281a0d66e944dc4c';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`, { mode: 'cors' });
  if (response.status === 200) {
    const json = await response.json();
    return json;
  }

  throw new Error(response.status);
};
const getWeather = async (location) => {
  let data;
  try {
    data = await loadJson(location);
    const error = domStuff.elements().notFound.textContent;
    if (error !== '') {
      domStuff.elements().notFound.textContent = '';
    }
    domStuff.showWeather(temp(), data);
    pexelsPhoto();
  } catch (err) {
    domStuff.showError(err);
  }
};

export default getWeather;
