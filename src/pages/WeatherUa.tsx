import React, { useState } from "react";
import Form from "../components/ui/Form";
import WeatherInfo from "../components/ui/WeatherInfo";
import WeatherFullInfo from "../components/ui/WeatherFullInfo";
import Meta from "../components/ui/Helmet";
import { useWeatherUA } from "../api/useWeatherUA";
import { useFullWeatherUA } from "../api/useFullWeatherUA";
import Header from "../components/layout/Header";

export default function WeatherUa() {
  const { weatherData, gettingWeather, clearWeatherData } = useWeatherUA();
  const { weatherMoreData, gettingMoreWeather, clearWeatherMoreData } =
    useFullWeatherUA();

  return (
    <>
      <Meta title="Прогноз погоди" />
      <div id="weatherForm">
        <Header title="Прогноз погоди" />

        <Form
          placeholder="Введіть своє місто"
          weatherMethod={gettingWeather}
          moreWeatherMethod={gettingMoreWeather}
          info="Отримати погоду"
          moreInfo="Більше інформації"
          clearDataMethods={[clearWeatherData, clearWeatherMoreData]}
          checkWeather="Перевірте погоду у вашому місті!"
        />
        <WeatherInfo
          temp={weatherData.temp}
          one="Температура:"
          city={weatherData.city}
          two="Місто:"
          country={weatherData.country}
          pressure={weatherData.pressure}
          three="Тиск:"
          humidity={weatherData.humidity}
          four="Вологість:"
          indicatorOne="гПа"
          error={weatherData.errorUA}
          ten="Погодні умови: "
          weather={weatherData.weather}
          weatherIcon={weatherData.weatherIcon}
          five="Широта: "
          six="Довгота: "
          lat={weatherData.lat}
          lon={weatherData.lon}
          seven="Метеорологічний радар"
        />
        <WeatherFullInfo
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
          seven="Вологість:"
          speed={weatherMoreData.speed}
          eight="Швидкість вітру:"
          gust={weatherMoreData.gust}
          nine="Порив вітру:"
          indicatorOne="гПа"
          indicatorTwo="м/с"
          error={weatherMoreData.errorUA}
          ten="Погодні умови: "
          weather={weatherMoreData.weather}
          weatherIcon={weatherMoreData.weatherIcon}
          eleven="Напрямок вітру: "
          deg={weatherMoreData.deg}
          twelve="Снігопад: "
          snow={weatherMoreData.snow}
          indicatorThree="mm/h"
          thirteen="Видимість: "
          visibility={weatherMoreData.visibility}
          indicatorFour="метрів"
          fourteen="Хмарність:"
          clouds={weatherMoreData.clouds}
          fifteen="Атмосферні опади: "
          rain={weatherMoreData.rain}
          sixteen="Широта: "
          seventeen="Довгота: "
          lat={weatherMoreData.lat}
          lon={weatherMoreData.lon}
          eighteen="Метеорологічний радар"
        />
      </div>
    </>
  );
}
