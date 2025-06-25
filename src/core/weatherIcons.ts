import React from "react";
import sun from "../img/sun.png";
import fewClouds from "../img/fewClouds.png";
import brokenClouds from "../img/brokenClouds.png";
import scatteredClouds from "../img/scatteredClouds.png";
import rain from "../img/rain.png";
import heavyRain from "../img/heavyRain.png";
import thunderstorm from "../img/thunderstorm.png";
import heavyThunderstorm from "../img/heavyThunderstorm.png";
import drizzle from "../img/drizzle.png";
import dust from "../img/dust.png";
import heavySnow from "../img/heavySnow.png";
import rainSnow from "../img/rainSnow.png";
import showerRain from "../img/showerRain.png";
import smoke from "../img/smoke.png";
import snow from "../img/snow.png";
import squalls from "../img/squalls.png";
import tornado from "../img/tornado.png";

type WeatherIconMap = {
  [key: number]: string;
};

export const weatherIcons: WeatherIconMap = {
  200: heavyThunderstorm,
  201: heavyThunderstorm,
  202: heavyThunderstorm,
  210: thunderstorm,
  211: thunderstorm,
  212: thunderstorm,
  221: thunderstorm,
  230: heavyThunderstorm,
  231: heavyThunderstorm,
  232: heavyThunderstorm,
  300: drizzle,
  301: drizzle,
  302: drizzle,
  310: drizzle,
  311: drizzle,
  312: heavyRain,
  313: heavyRain,
  314: heavyRain,
  321: showerRain,
  500: rain,
  501: rain,
  502: heavyRain,
  503: rain,
  504: rain,
  511: showerRain,
  520: heavyRain,
  521: heavyRain,
  522: showerRain,
  531: showerRain,
  600: snow,
  601: snow,
  602: heavySnow,
  611: rainSnow,
  612: rainSnow,
  613: rainSnow,
  615: rainSnow,
  616: rainSnow,
  620: rainSnow,
  621: rainSnow,
  622: rainSnow,
  701: smoke,
  711: smoke,
  721: smoke,
  731: dust,
  741: smoke,
  751: dust,
  761: dust,
  762: dust,
  771: squalls,
  781: tornado,
  800: sun,
  801: fewClouds,
  802: scatteredClouds,
  803: brokenClouds,
  804: brokenClouds,
};
