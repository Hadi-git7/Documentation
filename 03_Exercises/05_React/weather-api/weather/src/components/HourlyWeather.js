import React from 'react'
import './Body/Body.css'
import { useEffect, useState } from 'react'
import mostlycloudy from '../images/weather-icons/mostlycloudy.svg'
import clear from '../images/weather-icons/clear.svg'
import snow from '../images/weather-icons/snow.svg'
import cloudy from '../images/weather-icons/cloudy.svg'
import drizzle from '../images/weather-icons/drizzle.svg'
import partlycloudy from '../images/weather-icons/partlycloudy.svg'
import fog from '../images/weather-icons/fog.svg'
import rain from '../images/weather-icons/rain.svg'
import storm from '../images/weather-icons/storm.svg'
import unkown from '../images/weather-icons/unknown.svg'
import { changeImage } from './ChangeImage'

function HourlyWeather(props) {
  const [weather , setWeather] = useState([]);
  // const cityName = 'beirut';

  const Request =async () =>{
      try{
      const response =await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + props.city + '&cnt=8&units=metric&appid=64b2ce3e47f68cdd5ceec4697bb15652')
      const res = await response.json();
      setWeather(res);
      console.log(res);
      }catch(err){
        console.log(err);
      }
  }
  useEffect(()=>{
    Request();
    },[props.findWeather])
    
   
  return (
    <div className='weather-cards'>
    {weather?.list?.slice(0,7).map((item)=>{
      return (
        <div className='card'>
        <p>{item.dt_txt.substring(10, 16)}</p>
        {changeImage(item.weather[0].main)}
        <p>{Math.floor(item.main.temp)}°C</p>
        </div>
      )
    })}

  </div>

  )
}

export default HourlyWeather