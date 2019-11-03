import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import CurrentTemp from './Components/CurrentTemp';
import DailyForecast from './Components/DailyForecast';
import styled from 'styled-components';


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  ${props => ((props.type >= 800 && props.type <= 803) && (CurrentTime >= 5 && CurrentTime <= 10) ? 
    `
      background: -webkit-linear-gradient(to top, #ffa13a, #F0D1AE, #859BAC);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #ffa13a, #F0D1AE, #859BAC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;  
    `
  :
    null
  )}

  ${props => ((props.type >= 800 && props.type <= 803) && (CurrentTime >= 11 && CurrentTime <= 17) ? 
    `
      background: -webkit-linear-gradient(to top, #79BEE3, #4BA5D9, #287EC3);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #79BEE3, #4BA5D9, #287EC3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white; 
    `
  :
    null
  )}

  ${props => ((props.type >= 800 && props.type <= 803) && (CurrentTime >= 18 && CurrentTime <= 20) ? 
    `
      background: -webkit-linear-gradient(to top, #FCAF52, #FE7C85, #497087);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #FCAF52, #FE7C85, #497087); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;  
    `
  :
    null
  )}

  ${props => ((props.type >= 800 && props.type <= 803) && (CurrentTime <= 4 || CurrentTime >= 21) ? 
    `
      background: -webkit-linear-gradient(to top, #1D519D, #012059, #09162E);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #1D519D, #012059, #09162E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;
    `
  :
    null
  )}

  ${props => ((props.type === 804 || (props.type >= 200 && props.type <= 531)) && (CurrentTime >= 5 && CurrentTime <= 20) ? 
    `
      background: -webkit-linear-gradient(to top, #A4A6B2, #85939B, #F9F7F8, #5A5C69);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #A4A6B2, #85939B, #F9F7F8, #5A5C69); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;  
    `
  :
    null
  )}

  ${props => ((props.type === 804 || (props.type >= 200 && props.type <= 531)) && (CurrentTime <= 4 || CurrentTime >= 21) ? 
    `
      background: -webkit-linear-gradient(to top, #0e0f17, #202333, #110e0e, #252739);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #0e0f17, #202333, #110e0e, #252739); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;  
    `
  :
    null
  )}

  ${props => ((props.type >= 600 && props.type <= 622) && (CurrentTime >= 5 && CurrentTime <= 20) ? 
    `
      background: -webkit-linear-gradient(to top, #384753, #545E69, #939B9B);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #384753, #545E69, #939B9B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;  
    `
  :
    null
  )}

  ${props => ((props.type >= 600 && props.type <= 622) && (CurrentTime <= 4 || CurrentTime >= 21) ? 
    `
      background: -webkit-linear-gradient(to top, #0D0E27, #161938, #4E5B84);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #0D0E27, #161938, #4E5B84); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;  
    `
  :
    null
  )}

  ${props => ((props.type === 721 || props.type === 731 || props.type === 751 || props.type === 761) && (CurrentTime >= 5 && CurrentTime <= 20) ? 
    `
      background: -webkit-linear-gradient(to top, #805936, #bdc3c7, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #805936, #bdc3c7, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: white;  
    `
  :
    null
  )}
`;

const DailyForecastContainer = styled.div`
    position: absolute;
    bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
`;

const CurrentTime = moment().format('k');

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: [],
      currentTime: false,
      weather: '',
      id: '',
      mainTemp: [],
      humidity: '',
      temp: '',
      airPressure: '',
      wind: '',
      daily: [],
      fiveDayForecast: [],
      lat: '',
      long: '',
      coords: false,
      data: false,
      days: false,
    };
  }

getCurrentWeather = async URL => {
  try {
    const fetchData = await fetch(URL);
    const response = await fetchData.json();
    console.log(response);
    this.setState({ current: response.weather, mainTemp: response.main, wind: response.wind.speed});
    console.log(this.state.wind);
    this.weatherDescription();
    this.mainTemps();
    this.dayOrNight();
  } catch(err) {
      throw new Error(err);
  }
}

getDailyForcast = async URL => {
  try {
    const fetchData = await fetch(URL);
    const response = await fetchData.json();
    this.setState({ daily: response.list });
    this.fiveDay();
    this.setState({days: true})
  } catch(err) {
      throw new Error(err);
  }
}

componentDidMount() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({lat: position.coords.latitude, long: position.coords.longitude});
            this.setState({coords: true})
            this.getCurrentWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&units=imperial&appid=16730fe4226976460b4bfc031b6682f8`);
            this.getDailyForcast(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.long}&units=imperial&appid=16730fe4226976460b4bfc031b6682f8`);
            this.setState({data: true})
        })
    } else {
        alert('Please enable your location to get your current weather!');
    }
}

weatherDescription = () => this.state.current.map(des => {
  return this.setState({weather: des.description, id: des.id});
})

mainTemps = () => {
  const array = [];

  Object.keys(this.state.mainTemp).forEach(temp => {
    array.push(this.state.mainTemp[temp]);
  })

  this.setState({humidity: array[2], temp: Math.round(array[0]), airPressure: array[1]});
}

fiveDay = () => {
  for(let i = 4; i<this.state.daily.length; i+=8){
      const tempWeather = {date: this.state.daily[i].dt_txt,
                           temp: this.state.daily[i].main.temp,
                           weather: this.state.daily[i].weather[0].description,
                           id: this.state.daily[i].weather[0].id
      };

      this.state.fiveDayForecast.push(tempWeather);
  }
}

dayOrNight = () => {
  if (CurrentTime >= 5 && CurrentTime <= 20 ) {
    this.setState({currentTime: true})
  } else if (CurrentTime <= 4 || CurrentTime >= 21) {
    this.setState({currentTime: false})
  }
}

  render() {

    const days = this.state.fiveDayForecast.map((day, index) => (
      <DailyForecast
          day={moment(`${day.date}`, 'YYYY-MM-DD, hh:mm:ss').format('dddd')}
          temp={Math.round(`${day.temp}`)}
          id={day.id}
          weather={day.weather}
          key={index}
      />
    ));

    if (this.state.coords === false && this.state.data === false && this.state.days === false){
      return null;
    }

    return (

      <AppContainer type={this.state.id}>
        <CurrentTemp weather={this.state.weather} temp={this.state.temp} lat={this.state.lat} long={this.state.long} id={this.state.id} currentTime={this.state.currentTime} />

        <DailyForecastContainer>{days}</DailyForecastContainer>
      </AppContainer>
    );
  }
}

export default App;