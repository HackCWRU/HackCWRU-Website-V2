import React, { Component } from 'react';
import Logo from './components/Logo.js';
import Content from './components/Content.js';
import Sea from './components/Sea.js';
import Information from './components/Information.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="introduction">
          <Content />
          <Logo />
          <Sea />
        </section>

        <section className="section2">
          <Information title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </section>
      </div>
    );
  }
}

export default App;
