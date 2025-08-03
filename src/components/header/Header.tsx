import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { IHeaderTitle } from "@type/interfaces";
import Lang from "@languageIcon/language.png";
import UA from "@languageIcon/ukraine.png";
import UK from "@languageIcon/united-kingdom.png";

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
            <Link className="btn" to="/en">
              <img src={UK} />
            </Link>
            <Link className="btn" to="/">
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
