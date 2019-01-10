import React, { Component } from 'react';

class Schedule_Item extends Component {
  render() {
    return (
      <div className="container">
        <h5>{this.props.time} <span className="dayText"> {this.props.text} </span></h5>
      </div>
    );
  }
}

export default Schedule_Item;
