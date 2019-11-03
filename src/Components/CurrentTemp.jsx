import React from 'react';
import styled from 'styled-components';

// ----- Images ----- //
import clearDay from "../Assets/Icons/01d.svg";
import clearNight from "../Assets/Icons/01n.svg";
import fewCloudsDay from "../Assets/Icons/02d.svg";
import fewCloudsNight from "../Assets/Icons/02n.svg";
import scatteredCloudsDay from "../Assets/Icons/03d.svg";
import scatteredCloudsNight from "../Assets/Icons/03n.svg";
import brokenCloudsDay from "../Assets/Icons/04d.svg";
import brokenCloudsNight from "../Assets/Icons/04n.svg";
import overcastCloudsDay from "../Assets/Icons/05d.svg";
import overcastCloudsNight from "../Assets/Icons/05n.svg";
import rainDay from "../Assets/Icons/06d.svg";
import rainNight from "../Assets/Icons/06n.svg";
import heavyRainDay from "../Assets/Icons/07d.svg";
import heavyRainNight from "../Assets/Icons/07n.svg";
import freezingRainDay from "../Assets/Icons/08d.svg";
import freezingRainNight from "../Assets/Icons/08n.svg";
import thunderLightRainDay from "../Assets/Icons/09d.svg";
import thunderLightRainNight from "../Assets/Icons/09n.svg";
import thunderHeavyRainDay from "../Assets/Icons/10d.svg";
import thunderHeavyRainNight from "../Assets/Icons/10n.svg";
import thunderstormDay from "../Assets/Icons/11d.svg";
import thunderstormNight from "../Assets/Icons/11n.svg";
import snowDay from "../Assets/Icons/12d.svg";
import snowNight from "../Assets/Icons/12n.svg";
import heavySnowDay from "../Assets/Icons/13d.svg";
import heavySnowNight from "../Assets/Icons/13n.svg";
import sleetDay from "../Assets/Icons/14d.svg";
import sleetNight from "../Assets/Icons/14n.svg";



const CurrentTempContainer = styled.div`
    position: absolute;
    top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: transparent;
    width: 30%;
`;

const CurrentTempH1 = styled.h1`
    font-size: 5em;
    margin: 0;
`;

const LocationH3 = styled.h3`
    font-size: 1.17em;
    margin: 10px 0;
`;

const WeatherTypeH5 = styled.h1`
    font-size: .83em;
    margin: 10px 0 15px 0;
`;

const imgStyle = {
    width: '30%',
    margin: `10px 0`
};

class CurrentTemp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lat: props.lat,
          long: props.long,
          location: [],
          isLoading: false
        };
    }

    geoLocation = async URL => {
        try {
            const geo = await fetch(URL);
            const response = await geo.json();
            this.setState({location: response.address, isLoading: false});
            console.log(this.state.location);
        } catch(err) {
            throw new Error(err);
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.geoLocation(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${this.state.lat}&lon=${this.state.long}`);
    }

    render () {

        if (this.state.isLoading === true) {
            return null;
        }

        let image;

        if (this.props.id === 800) {
            image = <img src={this.props.currentTime ? clearDay : clearNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 801) {
            image = <img src={this.props.currentTime ? fewCloudsDay : fewCloudsNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 802) {
            image = <img src={this.props.currentTime ? scatteredCloudsDay : scatteredCloudsNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 803) {
            image = <img src={this.props.currentTime ? brokenCloudsDay : brokenCloudsNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 804) {
            image = <img src={this.props.currentTime ? overcastCloudsDay : overcastCloudsNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 200 || this.props.id === 201 || this.props.id === 230 || this.props.id === 231) {
            image = <img src={this.props.currentTime ? thunderLightRainDay : thunderLightRainNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 202 || this.props.id === 232) {
            image = <img src={this.props.currentTime ? thunderHeavyRainDay : thunderHeavyRainNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 210 || this.props.id === 211 || this.props.id === 212 || this.props.id === 221) {
            image = <img src={this.props.currentTime ? thunderstormDay : thunderstormNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 300 || this.props.id === 301 || this.props.id === 310 || this.props.id === 311 || this.props.id === 313 || this.props.id === 321 || this.props.id === 500 || this.props.id === 501 || this.props.id === 520 || this.props.id === 521) {
            image = <img src={this.props.currentTime ? rainDay : rainNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 302 || this.props.id === 312 || this.props.id === 314 || this.props.id === 502 || this.props.id === 503 || this.props.id === 504 || this.props.id === 522 || this.props.id === 531) {
            image = <img src={this.props.currentTime ? heavyRainDay : heavyRainNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 511 || this.props.id === 615 || this.props.id === 616 || this.props.id === 620 || this.props.id === 621 || this.props.id === 622) {
            image = <img src={this.props.currentTime ? freezingRainDay : freezingRainNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 600 || this.props.id === 601) {
            image = <img src={this.props.currentTime ? snowDay : snowNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 602) {
            image = <img src={this.props.currentTime ? heavySnowDay : heavySnowNight} style={imgStyle} alt={this.props.weather} />
        } else if (this.props.id === 611 || this.props.id === 612 || this.props.id === 613) {
            image = <img src={this.props.currentTime ? sleetDay : sleetNight} style={imgStyle} alt={this.props.weather} />
        }  

        return (
            <CurrentTempContainer>
                <LocationH3>{this.state.location.city === null ? null : this.state.location.city}{this.state.location.city === null ? null : `,`} {this.state.location.state === null ? null : this.state.location.state}</LocationH3>
                <WeatherTypeH5>{this.state.isLoading ? "Loading..." : this.props.weather.toUpperCase()}</WeatherTypeH5>
                {image}
                <CurrentTempH1>{this.state.isLoading ? "Loading..." : this.props.temp}° F</CurrentTempH1>
            </CurrentTempContainer>
        );
    }
}

export default CurrentTemp;