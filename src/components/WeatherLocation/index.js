import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';
//import{RAIN, CLOUD} from './../../constants/weathers';

//648008368e684007ca8939bd96942544
import './style.css';
const api_key="648008368e684007ca8939bd96942544";

/*const data={
    temperature:26,
    weatherstate:RAIN,
    humidity:11,
    wind:'22m/s',

};*/
/*const data2={
    temperature:55,
    weatherstate:WINDY,
    humidity:15,
    wind:'55m/s',

};*/
class WeatherLocation extends Component{

    constructor({city})
    {
        super();
        this.state = {
            city,
            data:null

        };
                console.log("contructor");

                
            }
    handleUpdateClick=()=>{
        
        /*
        this.setState({
            data:data2
        });*/
    }
    
    componentWillMount() {
        const {city}=this.state;
        const api_weather =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data=>{

            console.log(data);
            return data.json();
        }).then(weather_data=>{
            const data=transformWeather(weather_data);
            this.setState({data});

            

        });
        console.log("Actualizado");
        
    }
    
    render=()=>{
        console.log("render");
        const {onWeatherLocationClick}=this.props;
        const {city,data}=this.state;
        return(
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatherData data={data}/>: 
         <CircularProgress size={60} thickness={7} />
        } 
        
        </div>
        );
    };
}
WeatherLocation.propTypes={
    city:PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func,
}
export default WeatherLocation; 