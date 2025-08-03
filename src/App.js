import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NofoundPage } from "./pages/Nofoundpage";
import WeatherEn from "./pages/WeatherEn";
import WeatherUa from "./pages/WeatherUa";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter basename="/weather">
      <Routes>
        <Route path="/" element={<WeatherUa />} />
        <Route path="/en" element={<WeatherEn />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
