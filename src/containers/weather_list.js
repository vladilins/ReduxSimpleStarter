import React, { Component } from "react";
import { connect } from "react-redux";

export class WeatherList extends Component {
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
        <tbody>body</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
