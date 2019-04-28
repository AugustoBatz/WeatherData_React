import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css'
import transformForecast from './../services/transformForecast'

//const days=['Lunes','Martes','Miércoles','Juéves','Viernes']
//const data={temperature:12,humidity:10,weatherState :'normal',wind:'windds'}
const api_key="648008368e684007ca8939bd96942544";
const url ="https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={forecastData:null}
    }
    componentDidMount()
    {
      this.updateCity(this.props.city);

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city!==this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city);
        }
    }
    updateCity=city=>{
          //fetch or axios
          const url_forecast=`${url}?q=${city}&appid=${api_key}`;
          fetch(url_forecast).then(
              data=>(data.json())
          ).then(
              weather_data=>{
                  console.log(weather_data);
                  const forecastData=transformForecast(weather_data);
                  console.log(forecastData);
                  this.setState({forecastData});
  
              }
          );
    }
    renderForecastItemDays(forecastData){

        //return "Render Items";
        return forecastData.map(forecast=>(
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}/>));
        
    }
    renderProgress=()=>{
        return <h3>"Cargando Pronostico extendido..."</h3>;
    }
    render(){
        const {city}=this.props;
        const {forecastData}=this.state;

        return (
           
            <div> 
                    Pronostico extendido para {city}
                <h2 className='forecast-title'>
                </h2>

                {forecastData ? 
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()}
            </div>
        );
    }
}
ForecastExtended.propTypes={
    city:PropTypes.string.isRequired,
}
export default ForecastExtended;