import React from 'react';
import styled from 'styled-components';

// ----- Images ----- //
import clearDay from "../Assets/Icons/01d.svg";
import fewCloudsDay from "../Assets/Icons/02d.svg";
import scatteredCloudsDay from "../Assets/Icons/03d.svg";
import brokenCloudsDay from "../Assets/Icons/04d.svg";
import overcastCloudsDay from "../Assets/Icons/05d.svg";
import rainDay from "../Assets/Icons/06d.svg";
import heavyRainDay from "../Assets/Icons/07d.svg";
import freezingRainDay from "../Assets/Icons/08d.svg";
import thunderLightRainDay from "../Assets/Icons/09d.svg";
import thunderHeavyRainDay from "../Assets/Icons/10d.svg";
import thunderstormDay from "../Assets/Icons/11d.svg";
import snowDay from "../Assets/Icons/12d.svg";
import heavySnowDay from "../Assets/Icons/13d.svg";
import sleetDay from "../Assets/Icons/14d.svg";

const DailyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: transparent;
    width: 18%;
`;

const imgStyle = {
    width: '35%',
};


const DailyForecast = props => {

        let image;

        if (props.id === 800) {
            image = <img src={clearDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 801) {
            image = <img src={fewCloudsDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 802) {
            image = <img src={scatteredCloudsDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 803) {
            image = <img src={brokenCloudsDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 804) {
            image = <img src={overcastCloudsDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 200 || props.id === 201 || props.id === 230 || props.id === 231) {
            image = <img src={thunderLightRainDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 202 || props.id === 232) {
            image = <img src={thunderHeavyRainDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 210 || props.id === 211 || props.id === 212 || props.id === 221) {
            image = <img src={thunderstormDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 300 || props.id === 301 || props.id === 310 || props.id === 311 || props.id === 313 || props.id === 321 || props.id === 500 || props.id === 501 || props.id === 520 || props.id === 521) {
            image = <img src={rainDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 302 || props.id === 312 || props.id === 314 || props.id === 502 || props.id === 503 || props.id === 504 || props.id === 522 || props.id === 531) {
            image = <img src={heavyRainDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 511 || props.id === 615 || props.id === 616 || props.id === 620 || props.id === 621 || props.id === 622) {
            image = <img src={freezingRainDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 600 ||  props.id === 601) {
            image = <img src={snowDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 602) {
            image = <img src={heavySnowDay} style={imgStyle} alt={props.weather} />
        } else if (props.id === 611 || props.id === 612 || props.id === 613) {
            image = <img src={sleetDay} style={imgStyle} alt={props.weather} />
        }

        return (
            <DailyContainer>
                <div>
                    <h4>{props.day}</h4>
                    {image}
                    <h4>{props.temp}° F</h4>
                </div>

                <div></div>
            </DailyContainer>
        );
}

export default DailyForecast;