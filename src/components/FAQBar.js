import React, { Component } from 'react';

class FAQBar extends Component {
  render() {
    return (
    <div className="container">
        <h3>{this.props.question}</h3>
        <p>{this.props.answer}</p>
    </div>
    );
  }
}

export default FAQBar;
