import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <div>
        <Link to="/weather">EN</Link>
        <Link to="/weather/ua">UA</Link>
      </div>
    </header>
  );
}
