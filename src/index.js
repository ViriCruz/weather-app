import weather from './get-weather';
import elements from './dom-stuff';
import temperature from './temperature';
import extractNumber from './helpers';

const dom = elements();
const convert = temperature();
dom.submit.addEventListener('click', (e) => {
  weather(dom.location.value);
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
