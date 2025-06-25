import React, { FC } from "react";
import "./weather.scss";
import map from "../../img/map.png";
import satellite from "../../img/satellite.png";
import { IFullWeatherData } from "../../types/interfaces";
import { IFullWeatherMetadata } from "../../types/interfaces";

interface IFullWeatherInfoProps
  extends IFullWeatherData,
    IFullWeatherMetadata {}
const WeatherFullInfo: FC<IFullWeatherInfoProps> = (props) => {
  return (
    <div className="responseForm">
      {props.city && (
        <div>
          <div className="weatherLogo">
            <div>
              <h3>
                {props.two} {props.city}, {props.country}
              </h3>
              <h3>
                {props.one} {props.temp} °C
              </h3>
            </div>
            <div>
              <img src={props.weatherIcon} />
            </div>
          </div>
          <h3>
            {props.ten} {props.weather}
          </h3>
          <h3>
            {props.thirteen} {props.visibility} {props.indicatorFour}
          </h3>
          <h3>
            {props.three} {props.feels_like} °C
          </h3>
          <h3>
            {props.four} {props.temp_min} °C
          </h3>
          <h3>
            {props.five} {props.temp_max} °C
          </h3>
          <h3>
            {props.six} {props.pressure} {props.indicatorOne}
          </h3>
          <h3>
            {props.seven} {props.humidity}%
          </h3>
          <h3>
            {props.eight} {props.speed} {props.indicatorTwo}
          </h3>
          {props.gust !== undefined && (
            <h3>
              {props.nine} {props.gust} {props.indicatorTwo}
            </h3>
          )}
          <h3>
            {props.eleven} {props.deg}
          </h3>
          <h3>
            {props.fourteen} {props.clouds}%
          </h3>
          {props.snow !== undefined && (
            <h3>
              {props.twelve} {props.snow} {props.indicatorThree}
            </h3>
          )}
          {props.rain !== undefined && (
            <h3>
              {props.fifteen} {props.rain} {props.indicatorThree}
            </h3>
          )}
          <button>
            <img src={map} alt="Map" />
            <h3>
              {props.sixteen} {props.lat} {props.seventeen} {props.lon}
            </h3>
            <a
              href={`https://www.google.com/maps/place/@${props.lat},${props.lon},13.5z`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </button>
          <button>
            <img src={satellite} alt="Map" />
            <h3>{props.eighteen}</h3>
            <a
              href={`https://www.ventusky.com/?p=${props.lat};${props.lon};5&l=temperature-2m`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </button>
          {props.error}
        </div>
      )}
      <h4>{props.error}</h4>
    </div>
  );
};

export default WeatherFullInfo;
