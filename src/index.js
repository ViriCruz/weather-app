import openWeather from './get-weather';
import domStuff from './dom-stuff';

const dom = domStuff.elements();
dom.submit.addEventListener('click', (e) => {
  if (dom.location.value !== '') {
    dom.location.rel = dom.location.value
    if (dom.alert) {
      dom.alert.textContent = '';
      dom.alert.classList.replace('alert', 'none');
    }
    openWeather.getWeather(dom.location.value);
  } else {
    dom.alert.classList.replace('none', 'alert');
    dom.alert.textContent = 'Location cannot be empty';
  }
  e.preventDefault();
});

// converter logic
dom.convertToF.addEventListener('click', (e) => {
  const tempUnit = dom.currentTemp.textContent;
  if (tempUnit.match(['F']) === null) {
    const location = dom.location.rel
    openWeather.getTemperature(location, 'imperial')
    dom.convertToC.classList.remove('selected');
    e.target.classList.add('selected');
    e.preventDefault();
  }
});

dom.convertToC.addEventListener('click', (e) => {
  const tempUnit = dom.currentTemp.textContent;
  if (tempUnit.match(['C']) === null) {
    const location = dom.location.rel
    openWeather.getTemperature(location, 'metric')
    dom.convertToF.classList.remove('selected');
    e.target.classList.add('selected');
    e.preventDefault();
  }
});
