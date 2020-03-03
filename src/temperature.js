const temperature = () => {
  const kelvinToCelsius = k => (k - 273.15).toFixed(2)
  const celsiusToFahrenheit = c => ((c * 9/5) + 32).toFixed(2)
  const fahrenheitToCelsius = f => ((f - 32) * 5/9).toFixed(2)
  return {
    kelvinToCelsius,
    celsiusToFahrenheit,
    fahrenheitToCelsius
  }
}

export default temperature