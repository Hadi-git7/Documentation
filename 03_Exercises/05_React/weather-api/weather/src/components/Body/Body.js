import React from 'react'
import './Body.css'
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
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import FakeWeather from '../../data/FakeWeather.json'
import { useEffect, useState } from 'react'
import HourlyWeather from '../HourlyWeather'

function Body({city, findWeather}) {

  return (
    <div className='body' > 
    
      <CurrentWeather city={city} findWeather={findWeather}/>

      <HourlyWeather city={city} findWeather={findWeather}/>  
    </div>
  )
}

export default Body