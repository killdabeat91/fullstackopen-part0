import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const apiKey = import.meta.env.VITE_SOME_KEY

  useEffect(() => {
    if (capital && apiKey) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`
        )
        .then(response => {
          setWeather(response.data)
        })
        .catch(error => {
          console.log('Error fetching weather data', error)
        })
    }
  }, [capital, apiKey])

  if (!capital) {
    return null
  }

  if (!apiKey) {
    return <p>Weather data not available (API key not configured)</p>
  }

  if (!weather) {
    return <p>Loading weather...</p>
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>temperature {weather.main.temp} Celsius</p>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather
