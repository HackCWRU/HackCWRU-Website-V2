import React, { Component } from 'react';
import MenuBar from './Components/MenuBar.js';
import Content from './Components/Content.js';
import Sea from './Components/Sea.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="introduction">
          <MenuBar />
          <Content />
          <Sea />
        </section>
      </div>
    );
  }
}

export default App;
