import React, { FC, FormEvent } from "react";

export interface IWeatherData {
  temp: number | undefined;
  city: string | undefined;
  country: string | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
  error?: string | undefined;
  errorUA?: string | undefined;
  weather: string | undefined;
  weatherIcon: string | undefined;
  lat: number | undefined;
  lon: number | undefined;
}

export interface IFullWeatherData {
  temp: number | undefined;
  city: string | undefined;
  country: string | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
  error?: string | undefined;
  errorUA?: string | undefined;
  feels_like: number | undefined;
  temp_min: number | undefined;
  temp_max: number | undefined;
  speed: number | undefined;
  gust: number | undefined;
  weather: string | undefined;
  weatherIcon: string | undefined;
  deg: number | undefined;
  snow?: string | number | undefined;
  clouds: string | number | undefined;
  rain?: string | number | undefined;
  visibility: string | number | undefined;
  lat: number | undefined;
  lon: number | undefined;
}

export interface IFormProps {
  weatherMethod: (event: FormEvent<HTMLFormElement>) => void;
  moreWeatherMethod: (event: FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  info: string;
  moreInfo: string;
  clearDataMethods: Array<() => void>;
  checkWeather: string;
}

export interface IHelmetProps {
  title?: string;
  titleTemplate?: string;
  defaultTitle?: string;
  meta?: Array<{ name?: string; content?: string }>;
  link?: Array<{ rel?: string; href?: string }>;
  script?: Array<{ src?: string; async?: boolean; defer?: boolean }>;
}

export interface IHeaderTitle {
  title: string;
}

export interface IWeatherMetadata {
  one?: string | undefined;
  two?: string | undefined;
  three?: string | undefined;
  four?: string | undefined;
  five?: string | undefined;
  six?: string | undefined;
  seven?: string | undefined;
  ten: string | undefined;
  indicatorOne?: string | undefined;
}

export interface IFullWeatherMetadata {
  indicatorOne?: string | undefined;
  indicatorTwo?: string | undefined;
  indicatorThree?: string | undefined;
  indicatorFour?: string | undefined;
  one?: string | undefined;
  two?: string | undefined;
  three?: string | undefined;
  four?: string | undefined;
  five?: string | undefined;
  six?: string | undefined;
  seven?: string | undefined;
  eight?: string | undefined;
  nine?: string | undefined;
  ten?: string | undefined;
  eleven?: string | undefined;
  twelve?: string | undefined;
  thirteen?: string | undefined;
  fourteen?: string | undefined;
  fifteen?: string | undefined;
  sixteen?: string | undefined;
  seventeen?: string | undefined;
  eighteen?: string | undefined;
}
