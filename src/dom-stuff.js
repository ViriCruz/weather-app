const elements = () => {
  const currentTemp = document.querySelector('.container > p');
  const description = document.querySelector('.weather p');
  const icon = document.querySelector('.weather img');
  const submit = document.querySelector('#submit');
  const convertToC = document.querySelector('#celsius');
  const convertToF = document.querySelector('#fahrenheit');
  const location = document.querySelector('input');
  return {
    currentTemp,
    description,
    icon,
    submit,
    convertToC,
    convertToF,
    location,
  };
};

export default elements;
