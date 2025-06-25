import React, { useState } from "react";
import { weatherIcons } from "../core/weatherIcons"; // Убедитесь, что путь правильный
import { clearData } from "../core/clearData";
import { IWeatherData } from "../types/interfaces";

const API_Key = "cdfaba94122082bb2e215c5851761c88";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData>({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    error: undefined,
    errorUA: undefined,
    weather: undefined,
    weatherIcon: undefined,
    lat: undefined,
    lon: undefined,
  });
  const gettingWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const cityInput = form.elements.namedItem("city") as HTMLInputElement;
    const city = cityInput.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        error: undefined,
        errorUA: undefined,
        weather: data.weather[0].description,
        weatherIcon: weatherIcons[data.weather[0].id] || weatherIcons[800],
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
    } else {
      setWeatherData({
        city: undefined,
        country: undefined,
        temp: undefined,
        pressure: undefined,
        humidity: undefined,
        error: "Please enter your city",
        errorUA: "Будь ласка, введіть своє місто",
        weather: undefined,
        weatherIcon: undefined,
        lat: undefined,
        lon: undefined,
      });
    }
  };
  const clearWeatherData = () => {
    clearData(setWeatherData);
  };

  return { weatherData, gettingWeather, clearWeatherData };
};
