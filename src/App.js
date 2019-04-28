import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid,Row,Col} from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import './App.css';
import Paper from 'material-ui/Paper';
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtend';
import {createStore } from 'redux';

const cities=['Buenos Aires,ar','Ciudad de México,mx','Madrid,es'];

const store=createStore(()=>{});

class App extends Component {
  
  constructor()
  {
    super();
    this.state={city:null};
    
  }
  
  handleSelectionLocation=city=>
  {
    this.setState({city});
    //console.log(`handleSelectionLocation ${city }`); 
    store.dispatch({type:'setCity',value:city});
  } 
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App"></AppBar>
            
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectionLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  {
                    !this.state.city  ? 
                      <h1>Seleccione una ciuddad</h1>:
                      <ForecastExtended city={this.state.city}></ForecastExtended>
                  }
                  
                </div>
              </Paper>
            </Col>
          </Row>
          
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
