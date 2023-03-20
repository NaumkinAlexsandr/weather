import React, { useState } from "react";
import Info from "../components/Info";
import Form from "../components/Form";
import WeatherInfo from "../components/WeatherInfo";
import WeatherFullInfo from "../components/WeatherFullInfo";

const API_Key = "cdfaba94122082bb2e215c5851761c88";
// https://api.openweathermap.org/data/2.5/weather?q=Odessa&appid=cdfaba94122082bb2e215c5851761c88&units=metric
export default function WeatherEn() {
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
        error: "Please enter your city",
      });
    }
  };

  const gettingMoreWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
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
      error: undefined,
    });
  };

  return (
    <div id="weather-form">
      <Info
        title="Weather forecast"
        checkWeather="Check the weather in your city!"
      />
      <Form
        placeholder="Enter your city"
        weatherMethod={gettingWeather}
        moreWeatherMethod={gettingMoreWeather}
        info="Get weather"
        moreInfo="More info"
        clearDataMethods={[clearWeatherData, clearWeatherMoreData]}
      />
      <WeatherInfo
        date={weatherData.date}
        temp={weatherData.temp}
        one="Temperature:"
        city={weatherData.city}
        two="City:"
        country={weatherData.country}
        pressure={weatherData.pressure}
        three="Pressure:"
        humidity={weatherData.humidity}
        four="Humidity:"
        error={weatherData.error}
      />
      <WeatherFullInfo
        date={weatherMoreData.date}
        temp={weatherMoreData.temp}
        one="Temperature:"
        feels_like={weatherMoreData.feels_like}
        three="It feels like:"
        temp_min={weatherMoreData.temp_min}
        four="Temperature min:"
        temp_max={weatherMoreData.temp_max}
        five="Temperature max:"
        city={weatherMoreData.city}
        two="City:"
        country={weatherMoreData.country}
        pressure={weatherMoreData.pressure}
        six="Pressure:"
        humidity={weatherMoreData.humidity}
        seven="Humidity:"
        speed={weatherMoreData.speed}
        eight="Wind speed:"
        gust={weatherMoreData.gust}
        nine="A gust of wind:"
        error={weatherMoreData.error}
      />
    </div>
  );
}
