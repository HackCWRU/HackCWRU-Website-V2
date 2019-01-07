import React, { Component } from 'react';

class Information extends Component {
  render() {
    return (
    <div className="container">
        <div className="eachSection">
            <h3 className="darkTitle">{this.props.title}</h3>
            <p>{this.props.text}</p>
        </div>
    </div>
    );
  }
}

export default Information;
