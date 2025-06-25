import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { IHeaderTitle } from "../../types/interfaces";
import Lang from "../../img/languageIcon/language.png";
import UA from "../../img/languageIcon/ukraine.png";
import UK from "../../img/languageIcon/united-kingdom.png";

const Header: FC<IHeaderTitle> = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <header id="header">
      <div id="languagesMenu">
        <button onClick={handleClick}>
          <img src={Lang} />
        </button>
        {isMenuOpen && (
          <div id="languages">
            <Link className="btn" to="/weather/en">
              <img src={UK} />
            </Link>
            <Link className="btn" to="/weather">
              <img src={UA} />
            </Link>
          </div>
        )}
      </div>

      <div id="headerTitle">
        <h2>{title}</h2>
      </div>
    </header>
  );
};

export default Header;
