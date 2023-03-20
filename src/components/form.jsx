import React from "react";
import "./form.scss";

const Form = ({
  weatherMethod,
  moreWeatherMethod,
  placeholder,
  info,
  moreInfo,
  clearDataMethods,
}) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter.value === "more") {
      moreWeatherMethod(event);
    } else {
      weatherMethod(event);
    }
  };

  const handleClick = () => {
    clearDataMethods.forEach((method) => method());
  };

  return (
    <form id="cityForm" onSubmit={handleFormSubmit}>
      <input type="text" name="city" placeholder={placeholder} />
      <div>
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
