import React from "react";

const WeatherInfo = (props) => {
  return (
    <div>
      {props.city && (
        <div>
          <h3>
            {props.two} {props.city}, {props.country}
          </h3>
          <h3>
            {props.one} {props.temp}°C{" "}
          </h3>
          <h3>
            {props.three} {props.pressure}hPa
          </h3>
          <h3>
            {props.four} {props.humidity}%
          </h3>
          {props.error}
        </div>
      )}
      <h4>{props.error}</h4>
    </div>
  );
};

export default WeatherInfo;
