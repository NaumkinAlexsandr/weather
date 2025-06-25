import React, { useState } from "react";
import { weatherIcons } from "../core/weatherIcons"; // Убедитесь, что путь правильный
import { clearFullData } from "../core/clearData";
import { IFullWeatherData } from "../types/interfaces";

const API_Key = "cdfaba94122082bb2e215c5851761c88";

export const useFullWeatherUA = () => {
  const [weatherMoreData, setWeatherMoreData] = useState<IFullWeatherData>({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    error: undefined,
    errorUA: undefined,
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

  const gettingMoreWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const cityInput = form.elements.namedItem("city") as HTMLInputElement;
    const city = cityInput.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&appid=${API_Key}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);
      setWeatherMoreData({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        gust: data.wind.gust,
        error: undefined,
        errorUA: undefined,
        weather: data.weather[0].description,
        weatherIcon: weatherIcons[data.weather[0].id] || weatherIcons[800],
        deg: data.wind.deg,
        snow:
          data.snow && data.snow["1h"] !== undefined
            ? data.snow["1h"]
            : undefined,
        rain:
          data.rain && data.rain["1h"] !== undefined
            ? data.rain["1h"]
            : undefined,

        clouds: data.clouds.all,
        visibility: data.visibility,
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
    } else {
      setWeatherMoreData({
        temp: undefined,
        feels_like: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        speed: undefined,
        gust: undefined,
        error: "Please enter your city",
        errorUA: "Будь ласка, введіть своє місто",
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
    }
  };
  const clearWeatherMoreData = () => {
    clearFullData(setWeatherMoreData);
  };
  return { weatherMoreData, gettingMoreWeather, clearWeatherMoreData };
};
