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
  };
};

export default elements;
