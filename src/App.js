import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NofoundPage } from "./pages/Nofoundpage";
import WeatherEn from "./pages/WeatherEn";
import WeatherUa from "./pages/WeatherUa";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weather" element={<WeatherUa />} />
        <Route path="/weather/en" element={<WeatherEn />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
