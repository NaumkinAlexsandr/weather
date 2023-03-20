import React from "react";
import "./info.scss";

const Info = ({ title, checkWeather }) => (
  <div>
    <h1> {title}</h1>
    <h2> {checkWeather} </h2>
  </div>
);

export default Info;
