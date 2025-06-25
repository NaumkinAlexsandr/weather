import React from "react";
import { IWeatherData } from "../types/interfaces";
import { IFullWeatherData } from "../types/interfaces";

export const clearData = (
  setter: React.Dispatch<React.SetStateAction<IWeatherData>>
) => {
  setter({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    error: undefined,
    weather: undefined,
    weatherIcon: undefined,
    lat: undefined,
    lon: undefined,
  });
};

export const clearFullData = (
  setter: React.Dispatch<React.SetStateAction<IFullWeatherData>>
) => {
  setter({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    error: undefined,
    feels_like: undefined,
    temp_min: undefined,
    temp_max: undefined,
    speed: undefined,
    gust: undefined,
    weather: undefined,
    weatherIcon: undefined,
    deg: undefined,
    snow: undefined,
    clouds: undefined,
    rain: undefined,
    visibility: undefined,
    lat: undefined,
    lon: undefined,
  });
};
