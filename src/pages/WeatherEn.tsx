import React, { useState } from "react";
import Form from "../components/ui/Form";
import WeatherInfo from "../components/ui/WeatherInfo";
import WeatherFullInfo from "../components/ui/WeatherFullInfo";
import Meta from "../components/ui/Helmet";
import { useWeather } from "../api/useWeather";
import { useFullWeather } from "../api/useFullWeather";
import Header from "../components/layout/Header";

export default function WeatherEn() {
  const { weatherData, gettingWeather, clearWeatherData } = useWeather();
  const { weatherMoreData, gettingMoreWeather, clearWeatherMoreData } =
    useFullWeather();

  return (
    <>
      <Meta title="Weather forecast" />
      <div id="weatherForm">
        <Header title="Weather forecast" />

        <Form
          placeholder="Enter your city"
          weatherMethod={gettingWeather}
          moreWeatherMethod={gettingMoreWeather}
          info="Get weather"
          moreInfo="More info"
          clearDataMethods={[clearWeatherData, clearWeatherMoreData]}
          checkWeather="Check the weather in your city!"
        />
        <WeatherInfo
          temp={weatherData.temp}
          one="Temperature:"
          city={weatherData.city}
          two="City:"
          country={weatherData.country}
          pressure={weatherData.pressure}
          three="Pressure:"
          humidity={weatherData.humidity}
          four="Humidity:"
          indicatorOne="hPa"
          error={weatherData.error}
          ten="Weather condition: "
          weather={weatherData.weather}
          weatherIcon={weatherData.weatherIcon}
          five="Latitude: "
          six="Longitude: "
          lat={weatherData.lat}
          lon={weatherData.lon}
          seven="Weather radar"
        />
        <WeatherFullInfo
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
          nine="Wind gust:"
          indicatorOne="hPa"
          indicatorTwo="m/s;"
          error={weatherMoreData.error}
          ten="Weather condition: "
          weather={weatherMoreData.weather}
          weatherIcon={weatherMoreData.weatherIcon}
          eleven="Wind direction: "
          deg={weatherMoreData.deg}
          twelve="Snowfall: "
          snow={weatherMoreData.snow}
          indicatorThree="mm/h"
          thirteen="Visibility: "
          visibility={weatherMoreData.visibility}
          indicatorFour="meter"
          fourteen="Cloudiness: "
          clouds={weatherMoreData.clouds}
          fifteen="Rainfall: "
          rain={weatherMoreData.rain}
          sixteen="Latitude: "
          seventeen="Longitude: "
          lat={weatherMoreData.lat}
          lon={weatherMoreData.lon}
          eighteen="Weather radar"
        />
      </div>
    </>
  );
}
