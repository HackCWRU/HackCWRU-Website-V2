import React, { Component } from 'react';
import cutie from '../assets/cutie.png';

class Content extends Component {
  render() {
    return (
      <div className="mainContent">
        <div className="theText">
          <h1>HackCWRU 6</h1>
          <h3>Case Western Reserve University</h3>
          <h4>February 15-17th 2019</h4>
          <h4>Registration Opening Soon</h4>
          <div className="buttonGroup">
            <a target="_blank" href="#" className="Button lhd">
              <button>
                <p className="buttonTextLHD"> Opening Soon! </p>
              </button>
            </a>
          </div>
        </div>

        <div className="myLogo">
          <img src={cutie} />
        </div>
      </div>
    );
  }
}

export default Content;
