import React, { Component } from 'react';

import Logo from './components/Logo.js';
import Content from './components/Content.js';
import FAQBar from './components/FAQBar.js';
import Information from './components/Information.js';
import Schedule from './components/Schedule.js';

import Sea_sec1 from './components/Sea_sec1.js';
import Sea_sec2 from './components/Sea_sec2.js';
import Sea_sec3 from './components/Sea_sec3.js';
import Sea_sec4 from './components/Sea_sec4.js';

import clownFish from './Assets/new_assets/section_2/clown_fish.svg';
import mantaRay from './Assets/new_assets/section_2/manta_ray.svg';

import bubbles from './Assets/new_assets/section_3/bubbles.svg';
import backgroundFish from './Assets/new_assets/section_3/backgroundFish.svg';
import greenFish from './Assets/new_assets/section_3/greenFish.svg';
import purpleFish from './Assets/new_assets/section_3/purpleFish.svg';

import waveFish from './Assets/new_assets/section_4/fish_in_wave.svg';
import backFish2 from './Assets/new_assets/section_4/2backFish.svg';
import backFish3 from './Assets/new_assets/section_4/3fishBack.svg';
import fishies from './Assets/new_assets/section_4/fishies.svg';
import octopi from './Assets/new_assets/section_4/octopi.svg';

import bottomBed from './Assets/new_assets/section_5/final.svg';

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
          <div className="eachSection">
            <h3 className="title">FAQ</h3>
            <div className="bubbleContainer">
              <FAQBar question="What is a hackCWRU?" answer="hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation."/>
              <FAQBar question="What is a hackCWRU?" answer="hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation."/>
              <FAQBar question="What is a hackCWRU?" answer="hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation."/>
              <FAQBar question="What is a hackCWRU?" answer="hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation."/>
              <FAQBar question="What is a hackCWRU?" answer="hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation."/>
              <FAQBar question="What is a hackCWRU?" answer="hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation."/>
            </div>
          </div>
          <div className="bubbles">
            <img src={bubbles}></img>
          </div>
          <div className="backgroundFish">
            <img src={backgroundFish}></img>
          </div>
          <div className="greenFish">
            <img src={greenFish}></img>
          </div>
          <div className="purpleFish">
            <img src={purpleFish}></img>
          </div>
          <Sea_sec3 />
        </section>

        <section className="section4">
          <div className="waveFish">
            <img src={waveFish}></img>
          </div>
          <div className="eachSection">
            <Schedule />
          </div>


          <div className="backFish2">
            <img src={backFish2}></img>
          </div>
          <div className="backFish3">
            <img src={backFish3}></img>
          </div>
          <div className="fishies">
            <img src={fishies}></img>
          </div>
          <div className="octopi">
            <img src={octopi}></img>
          </div>
          <Sea_sec4 />
        </section>

        <section className="section5">
          <div className="eachSection">
            <h3 className="darkTitle">Sponsorship</h3>
          </div>
          <div className="bottomBed">
            <img src={bottomBed}></img>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
