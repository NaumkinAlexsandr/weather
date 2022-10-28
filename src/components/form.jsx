import React from "react";
import "./form.css";

class Form extends React.Component {
  render() {
    return (
      <form id="cityForm" onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Enter your city" />
        <button>Get weather </button>
      </form>
    );
  }
}

export default Form;
