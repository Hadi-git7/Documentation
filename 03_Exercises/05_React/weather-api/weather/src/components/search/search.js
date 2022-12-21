import React from 'react'
import './search.css'
const Search = ({setCity, setFindweather, city})=>{
  return (
    <div className='search-input'>
        <input type='search' value={city} placeholder='Enter City Name' onChange={(e)=>{
          setCity(e.target.value)
        }}/>
        <button onClick={()=> {
          setFindweather(true)
          setTimeout(()=>{
            setFindweather(false)
          }, 1000)
        }}>FIND WEATHER</button>
    </div>
  )
}

export default Search