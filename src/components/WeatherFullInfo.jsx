import React from "react";

const WeatherFullInfo = (props) => {
  return (
    <div>
      {props.city && (
        <div>
          <h3>
            {props.two} {props.city}, {props.country}
          </h3>
          <h3>
            {props.one} {props.temp}°C
          </h3>
          <h3>
            {props.three} {props.feels_like}°C
          </h3>
          <h3>
            {props.four} {props.temp_min}°C
          </h3>
          <h3>
            {props.five} {props.temp_max}°C
          </h3>
          <h3>
            {props.six} {props.pressure}hPa
          </h3>
          <h3>
            {props.seven} {props.humidity}%
          </h3>
          <h3>
            {props.eight} {props.speed} m/s
          </h3>
          <h3>
            {props.nine} {props.gust} m/s
          </h3>

          {props.error}
        </div>
      )}
      <h4>{props.error}</h4>
    </div>
  );
};

export default WeatherFullInfo;
