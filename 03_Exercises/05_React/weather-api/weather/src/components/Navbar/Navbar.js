import React from 'react'
import './Navbar.css';
import Search from '../search/search';
function Navbar() {
  return (
    <div  className='Navbar'>
        <Search />
        <button>FIND WEATHER</button>
    </div>
  )
}

export default Navbar