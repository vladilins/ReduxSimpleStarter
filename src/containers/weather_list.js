import React, { Component } from "react";
import { connect } from "react-redux";

export class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperate</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather && this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
