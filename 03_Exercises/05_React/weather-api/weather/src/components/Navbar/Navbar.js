import React from 'react'
import './Navbar.css';
import Search from '../search/search';
function Navbar({setCity, setFindweather, city}) {
  return (
    <div  className='Navbar'>
        <Search setCity={setCity} city={city} setFindweather={setFindweather}/>
        
    </div>
  )
}

export default Navbar