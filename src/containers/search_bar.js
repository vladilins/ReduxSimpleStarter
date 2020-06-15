import React, { Component } from "react";
import { connect } from "react-redux";

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <form action="" className="input-group">
          <input type="text" />
          <span className="input-group-btn">
            <button className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
