import React, { Component } from 'react';
import cutie from '../assets/new_assets/section_1/beachy_boi_v3.svg';

class Logo extends Component {
  render() {
    return (
      <div className="myLogo">
        <div className="imageLogo">
          <img src={cutie} />
        </div>
      </div>
    );
  }
}

export default Logo;
