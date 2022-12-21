import React from 'react'
import './Navbar.css';
import Search from '../search/search';
function Navbar({setCity, setFindweather}) {
  return (
    <div  className='Navbar'>
        <Search setCity={setCity} setFindweather={setFindweather}/>
        
    </div>
  )
}

export default Navbar