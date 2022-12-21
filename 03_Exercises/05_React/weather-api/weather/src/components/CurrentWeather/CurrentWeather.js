import React from 'react'
import '../Body/Body.css'
import { useEffect, useState } from 'react'
import { changeImage } from '../ChangeImage'
function CurrentWeather(props) {

  const [weather , setWeather] = useState()
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
            {changeImage(weather.weather[0].main)}
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