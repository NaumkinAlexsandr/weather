import React, { FC, FormEvent } from "react";
import "./form.scss";
import { IFormProps } from "../../types/interfaces";

const Form: FC<IFormProps> = ({
  weatherMethod,
  moreWeatherMethod,
  placeholder,
  info,
  moreInfo,
  clearDataMethods,
  checkWeather,
}) => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const submitter = target.querySelector(
      'button[type="submit"]:focus'
    ) as HTMLButtonElement;

    if (submitter.value === "more") {
      moreWeatherMethod(event);
    } else {
      weatherMethod(event);
    }
  };

  const handleClick = () => {
    clearDataMethods.forEach((method) => method());
  };

  return (
    <form id="searchForm" onSubmit={handleFormSubmit}>
      <h3> {checkWeather} </h3>
      <input type="text" name="city" placeholder={placeholder} />
      <div className="buttonConteiner">
        <button onClick={handleClick} type="submit" value="weather">
          {info}
        </button>
        <button onClick={handleClick} type="submit" value="more">
          {moreInfo}
        </button>
      </div>
    </form>
  );
};

export default Form;
