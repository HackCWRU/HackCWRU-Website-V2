import React, { Component } from 'react';
import MenuBar from './components/MenuBar.js';
import Content from './components/Content.js';
import Sea from './components/Sea.js';
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
