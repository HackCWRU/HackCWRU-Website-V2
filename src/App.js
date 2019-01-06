import React, { Component } from 'react';
import Logo from './components/Logo.js';
import Content from './components/Content.js';
import FAQBar from './components/FAQBar.js';
import Sea_sec1 from './components/Sea_sec1.js';
import Sea_sec2 from './components/Sea_sec2.js';
import Information from './components/Information.js';
import clownFish from './Assets/new_assets/section_2/clown_fish.svg';
import mantaRay from './Assets/new_assets/section_2/manta_ray.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="introduction">
          <Content />
          <Logo />
          <Sea_sec1 />
        </section>

        <section className="section2">
          <Information title="What is hackCWRU?" text={["hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation.",<br />,<br />,  "Hosted at Case Western Reserve University, over 350 students will spend 36 hours bringing their imagination into the real world. Attendees will work with peers and mentors to create projects in one of four project tracks. ", <br />, <br />, "Don’t be intimidated! You don’t have to know what you’re doing to attend. If you are new to hackathon, we look forward to introducing you to a world of creation. Lastly, at hackCWRU we abide by and enforce MLH’s Code of Conduct"]}/>
          <div className="clownFish">
            <img src={clownFish}></img>
          </div>
          <div className="mantaRay">
            <img src={mantaRay}></img>
          </div>
          <Sea_sec2 />
        </section>

        <section className="section3">
          <Information title="FAQ" text="" />
          <div className="FAQContent">
            <FAQBar question="" answer=""/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
