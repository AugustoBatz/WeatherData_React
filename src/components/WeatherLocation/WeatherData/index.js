import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';
import PropTypes from 'prop-types';
const WeatherData=({data})=>{
    const{temperature,weatherstate,humidity,wind}=data;
    return(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherstate={weatherstate}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/> 
    </div>
    );
};
WeatherData.protoTypes={
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherstate:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,

    }),
}

export default WeatherData;