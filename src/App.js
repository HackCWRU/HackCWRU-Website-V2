import React, { Component } from 'react';

import Intro_Section from './Components/intro_section';
import WhathackCWRU from './Components/whathackCWRU';
import Tracks from './Components/tracks';
import Faq from './Components/faq';
import Carousel from './Components/carousel';
import Sponsors from './Components/sponsors';
import MenuBar from './Components/MenuBar';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Appp">
        <MenuBar />
        <Intro_Section />
        <WhathackCWRU />
        <Tracks />
        <Faq />
        <Carousel />
        <Sponsors />
      </div>
    );
  }
}

export default App;
