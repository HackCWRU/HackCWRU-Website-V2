import React, { Component } from 'react';
import top_sea from '../assets/new_assets/section_1/top_sea.svg';
import middle_sea from '../assets/new_assets/section_1/mid_sea.svg';
import bottom_sea from '../assets/new_assets/section_1/bot_sea.svg';


class Sea_sec1 extends Component {
  render() {
    return (
      <div className="sea">
        <img className="sea_sec_1 top_sea_sec_1" src={top_sea} />
        <img className="sea_sec_1 mid_sea_sec_1" src={middle_sea} />
        <img className="sea_sec_1 bot_sea_sec_1" src={bottom_sea} />
      </div>
    );
  }
}

export default Sea_sec1;
