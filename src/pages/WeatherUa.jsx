import React, { useState } from "react";
import Info from "../components/Info";
import Form from "../components/Form";
import WeatherInfo from "../components/WeatherInfo";
import WeatherFullInfo from "../components/WeatherFullInfo";
import { Helmet } from "react-helmet";

const API_Key = "cdfaba94122082bb2e215c5851761c88";

export default function WeatherUa() {
  const [weatherData, setWeatherData] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    error: undefined,
  });

  const [weatherMoreData, setWeatherMoreData] = useState({
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
    sea_level: undefined,
    error: undefined,
  });

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

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
      });
    } else {
      setWeatherData({
        city: undefined,
        country: undefined,
        temp: undefined,
        pressure: undefined,
        humidity: undefined,
        error: "Будь ласка, введіть своє місто",
      });
    }
  };

  const gettingMoreWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url1 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
      );
      const data = await api_url1.json();
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
        sea_level: data.main.sea_level,
        error: undefined,
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
        sea_level: undefined,
        error: "Будь ласка, введіть своє місто",
      });
    }
  };

  const clearWeatherData = () => {
    setWeatherData({
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      humidity: undefined,
      error: undefined,
    });
  };

  const clearWeatherMoreData = () => {
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
      sea_level: undefined,
      error: undefined,
    });
  };

  return (
    <>
      <Helmet>
        <title>Прогноз погоди</title>
        <meta name="content-type" content="text/html; charset=UTF-8"></meta>
        <meta name="description" content="This is my React Native app"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="keywords" content="Weather forecast, Прогноз погоди"></meta>
        <meta name="author" content="Naumkin Alexsander"></meta>
        <meta name="rating" content="general"></meta>
        <meta name="language" content="en"></meta>
        <meta name="language" content="ua"></meta>
      </Helmet>
      <div id="weather-form">
        <Info
          title="Прогноз погоди"
          checkWeather="Перевірте погоду у вашому місті!"
        />
        <Form
          placeholder="Введіть своє місто"
          weatherMethod={gettingWeather}
          moreWeatherMethod={gettingMoreWeather}
          info="Отримати погоду"
          moreInfo="Більше інформації"
          clearDataMethods={[clearWeatherData, clearWeatherMoreData]}
        />
        <WeatherInfo
          date={weatherData.date}
          temp={weatherData.temp}
          one="Температура:"
          city={weatherData.city}
          two="Місто:"
          country={weatherData.country}
          pressure={weatherData.pressure}
          three="Тиск:"
          humidity={weatherData.humidity}
          four="Давление:"
          error={weatherData.error}
        />
        <WeatherFullInfo
          date={weatherMoreData.date}
          temp={weatherMoreData.temp}
          one="Температура:"
          feels_like={weatherMoreData.feels_like}
          three="Відчувається, як:"
          temp_min={weatherMoreData.temp_min}
          four="Температура min:"
          temp_max={weatherMoreData.temp_max}
          five="Температура max:"
          city={weatherMoreData.city}
          two="Місто:"
          country={weatherMoreData.country}
          pressure={weatherMoreData.pressure}
          six="Тиск:"
          humidity={weatherMoreData.humidity}
          seven="Давление:"
          speed={weatherMoreData.speed}
          eight="Швидкість вітру:"
          gust={weatherMoreData.gust}
          nine="Порив вітру:"
          sea_level={weatherMoreData.sea_level}
          ten="Рівень моря:"
          error={weatherMoreData.error}
        />
      </div>
    </>
  );
}
