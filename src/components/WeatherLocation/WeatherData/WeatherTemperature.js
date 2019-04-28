import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';
import{CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    WINDY,
    THUNDER,
    SNOW,
    DRIZZLE} from '../../../constants/weathers';

const stateToIconName=weatherState=>
{
    switch (weatherState) {
        case DRIZZLE:
            return "day-showers";
        case THUNDER:
            return "day-thunderstorm";
        case SNOW:
            return "snow";
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case WINDY:
            return "windy";
    
        default:
            return "day-sunny";
            
    }
};
const getWeatherIcon=weatherstate=>{
   return (<WeatherIcons className='wicon' name={stateToIconName(weatherstate)} size="4x"/>);
};
const WeatherTemperature=({temperature,weatherstate})=>(
   
    <div className='weatherTemperature'>
        {getWeatherIcon(weatherstate)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>°C</span>    

    </div>
    
    
); 
WeatherTemperature.propTypes={
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string,
}
export default WeatherTemperature; 