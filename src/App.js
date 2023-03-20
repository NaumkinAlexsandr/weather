import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NofoundPage } from "./pages/Nofoundpage";
import WeatherEn from "./pages/WeatherEn";
import WeatherUa from "./pages/WeatherUa";
import Header from "./components/Header";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/weather" element={<WeatherEn />} />
        <Route path="/weather/ua" element={<WeatherUa />} />
        <Route path="*" element={<NofoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
