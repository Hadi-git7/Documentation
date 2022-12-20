import React from 'react'
import './Body.css'
import mostlycloudy from '../Body/mostlycloudy.svg'
import clear from '../Body/clear.svg'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import FakeWeather from '../../data/FakeWeather.json'
function Body() {
 
  return (
    <div className='body' > 
    
      <CurrentWeather />

      <div className='weather-cards'>
      {FakeWeather.list.map(fake => {
        return(
          <div className='card'>
          <p>03:00</p>
          <img src={mostlycloudy} alt='mostly cloudy icon'/>
          <p>8°C</p>

        </div>
        )
      })}
       

      </div>

    </div>
  )
}

export default Body