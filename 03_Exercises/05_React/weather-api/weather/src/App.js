
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body.js';
import { useState } from 'react';


function App() {
  const [city, setCity] = useState('london')
  const [findWeather, setFindweather] = useState(false)
  
  return (
    <div className="App">
      {console.log(city)}
   <Navbar city={city} setCity={setCity} setFindweather={setFindweather}/>
   <Body city={city} findWeather={findWeather}/>
    </div>
  );
}

export default App;
