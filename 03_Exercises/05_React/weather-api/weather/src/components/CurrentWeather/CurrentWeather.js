import React from 'react'
import '../Body/Body.css'
import mostlycloudy from '../../images/weather-icons/mostlycloudy.svg'
import clear from '../../images/weather-icons/clear.svg'
import snow from '../../images/weather-icons/snow.svg'
import cloudy from '../../images/weather-icons/cloudy.svg'
import drizzle from '../../images/weather-icons/drizzle.svg'
import partlycloudy from '../../images/weather-icons/partlycloudy.svg'
import fog from '../../images/weather-icons/fog.svg'
import rain from '../../images/weather-icons/rain.svg'
import storm from '../../images/weather-icons/storm.svg'
import unkown from '../../images/weather-icons/unknown.svg'
import { useEffect, useState } from 'react'

function CurrentWeather(props) {

  const [weather , setWeather] = useState()
  // const cityName = 'beirut'
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + props.city + '&appid=64b2ce3e47f68cdd5ceec4697bb15652')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data)
      setWeather(data)
    })
  },[props.findWeather])

  return (
    <div>
      {weather &&
      (
        <div>
          <div className='mainImage'>
            <img src={clear} alt='mostly cloudy icon'/>
          </div>
          <div className='imgDiscription'>
            <p>{weather.weather[0].description}</p>
          </div>

          <div className='temperature'>
            <p><span className='temp'>Temperature</span> &nbsp;&nbsp;{Math.floor(weather.main.temp_min - 273.15)}°C &nbsp;&nbsp;to &nbsp;&nbsp; {Math.floor(weather.main.temp_max - 273.15)}°C</p>
          </div>

          <div className='hum-pre'>
            <p><span className='hp'>Humidity</span> &nbsp;&nbsp; {weather.main.humidity}% &nbsp;&nbsp; <span className='hp'>Pressure </span>&nbsp;&nbsp; {weather.main.pressure}</p>
          </div>
        </div>
      )}
    </div>
  )
  
}

export default CurrentWeather