import weather from './get-weather';
import domStuff from './dom-stuff';
import temperature from './temperature';
import extractNumber from './helpers';

const dom = domStuff.elements();
const convert = temperature();
dom.submit.addEventListener('click', (e) => {
  if (dom.location.value !== '') {
    if (dom.alert) {
      dom.alert.textContent = '';
      dom.alert.classList.replace('alert', 'none');
    }
    weather(dom.location.value);
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
    const temp = extractNumber(tempUnit);
    const fahr = convert.celsiusToFahrenheit(temp);
    dom.currentTemp.textContent = `${fahr} °F`;
    dom.convertToC.classList.remove('selected');
    e.target.classList.add('selected');
    e.preventDefault();
  }
});

dom.convertToC.addEventListener('click', (e) => {
  const tempUnit = dom.currentTemp.textContent;
  if (tempUnit.match(['C']) === null) {
    const temp = extractNumber(tempUnit);
    const celsius = convert.fahrenheitToCelsius(temp);
    dom.currentTemp.textContent = `${celsius} °C`;
    dom.convertToF.classList.remove('selected');
    e.target.classList.add('selected');
    e.preventDefault();
  }
});
