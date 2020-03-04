const elements = () => {
  const currentTemp = document.querySelector('.container > p');
  const description = document.querySelector('.weather p');
  const icon = document.querySelector('.weather img');
  const submit = document.querySelector('#submit');
  const convertToC = document.querySelector('#celsius');
  const convertToF = document.querySelector('#fahrenheit');
  const location = document.querySelector('input');
  const details = document.querySelector('.none');
  const bgImage = document.querySelector('.bg-image');
  const photographer = document.querySelector('#photographer');
  const pexels = document.querySelector('#pexels-credit span');
  const notFound = document.querySelector('#not-found');
  const weatherContainer = document.querySelector('article.container');
  const alert = document.querySelector('.form > div');
  return {
    currentTemp,
    description,
    icon,
    submit,
    convertToC,
    convertToF,
    location,
    details,
    bgImage,
    pexels,
    photographer,
    notFound,
    weatherContainer,
    alert,
  };
};

const showWeather = (converter, data) => {
  const dom = elements();
  const details = document.querySelector('.details.none');
  if (details) details.classList.remove('none');
  if (dom.details) dom.details.classList.remove('none');
  dom.currentTemp.textContent = `${converter.kelvinToCelsius(data.main.temp)} °C`;
  dom.description.textContent = data.weather[0].description;
  dom.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

const showError = (error) => {
  elements().weatherContainer.classList.add('none');
  elements().notFound.textContent = error;
};

const showPexelsPhoto = (url, photographer, pexelsLink) => {
  elements().bgImage.style.backgroundImage = `url('${url}')`;
  elements().pexels.textContent = 'Photos provided by Pexels. Photo by';
  elements().photographer.textContent = photographer;
  elements().photographer.href = pexelsLink;
};

export default {
  elements,
  showWeather,
  showError,
  showPexelsPhoto,
};
