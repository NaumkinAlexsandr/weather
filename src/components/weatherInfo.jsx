import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <div>
            <h3>
              City: {this.props.city}, {this.props.country}
            </h3>
            <h3>Temp: {this.props.temp}°C </h3>
            <h3>Pressure: {this.props.pressure}hPa</h3>
            <h3>Humidity: {this.props.humidity}%</h3>
            {this.props.error}
          </div>
        )}
        <h4>{this.props.error}</h4>
      </div>
    );
  }
}

export default Weather;
