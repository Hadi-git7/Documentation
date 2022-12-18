import React from 'react'
import './Body.css'


function Body() {
  return (
    <div className='body' > 

      <div className='mainImage'>
        <img src='https://placekitten.com/200/200' alt='to be edited'/>
        
      </div>

      <div className='imgDiscription'>
        <p>overcast clouds</p>
      </div>

      <div className='temperature'>
        <p><span className='temp'>Temperature</span> 10° to 11°C</p>
      </div>

      <div className='hum-pre'>
        <p><span className='hp'>Humidity</span> &nbsp;&nbsp; 78% &nbsp;&nbsp; <span className='hp'>Pressure </span>&nbsp;&nbsp; 1008.48</p>
      </div>

      <div className='weather-cards'>

        <div className='card'>
          <p>03:00</p>
          <img src='https://placekitten.com/100/100' alt='to be edited' />
          <p>8°C</p>

        </div>

        <div className='card'>
          <p>06:00</p>
          <img src='https://placekitten.com/100/100' alt='to be edited'/>
          <p>9°C</p>

        </div>

        <div className='card'>
          <p>09:00</p>
          <img src='https://placekitten.com/100/100' alt='to be edited'/>
          <p>14°C</p>

        </div>


        <div className='card'>
          <p>12:00</p>
          <img src='https://placekitten.com/100/100' alt='to be edited'/>
          <p>17°C</p>

        </div>


        <div className='card'>
          <p>15:00</p>
          <img src='https://placekitten.com/100/100' alt='to be edited'/>
          <p>18°C</p>

        </div>


        <div className='card'>
          <p>18:00</p>
          <img src='https://placekitten.com/100/100' alt='to be edited'/>
          <p>16°C</p>

        </div>


        <div className='card'>
          <p>21:00</p>
          <img src='https://placekitten.com/100/100' alt='to be edited'/>
          <p>13°C</p>

        </div>

      </div>

    </div>
  )
}

export default Body