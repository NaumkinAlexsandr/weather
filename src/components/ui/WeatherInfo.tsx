import React, { FC } from "react";
import "./weather.scss";
import map from "../../img/map.png";
import satellite from "../../img/satellite.png";
import { IWeatherData } from "../../types/interfaces";
import { IWeatherMetadata } from "../../types/interfaces";

interface IWeatherInfoProps extends IWeatherData, IWeatherMetadata {}
const WeatherInfo: FC<IWeatherInfoProps> = (props) => {
  return (
    <div className="responseForm">
      {props.city && (
        <>
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
            {props.three} {props.pressure} {props.indicatorOne}
          </h3>
          <h3>
            {props.four} {props.humidity}%
          </h3>
          <button>
            <img src={map} alt="Map" />
            <h3>
              {props.five} {props.lat} {props.six} {props.lon}
            </h3>
            <a
              href={`https://www.google.com/maps/place/@${props.lat},${props.lon},13.5z`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </button>
          <button>
            <img src={satellite} alt="Map" />
            <h3>{props.seven}</h3>
            <a
              href={`https://www.ventusky.com/?p=${props.lat};${props.lon};5&l=temperature-2m`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </button>
          {props.error}
        </>
      )}
      <h4>{props.error}</h4>
    </div>
  );
};

export default WeatherInfo;
