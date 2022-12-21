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

export function changeImage(value){
let image;
if (value === 'Drizzle'){
    image = drizzle
}else if (value === 'Rain'){
    image = rain
}else if (value === 'Snow'){
    image = snow
}else if (value === 'Clouds'){
    image = mostlycloudy
}else if (value === 'Clear'){
    image = clear
}else if (value === 'Fog'){
    image = fog
}else if (value === 'Thunderstorm'){
    image = storm
}else image = unkown;
return <img src={image} alt={'icon'}/>
}
