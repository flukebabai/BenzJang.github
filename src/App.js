import React, { Component } from 'react';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>HI</p>
          <Chart/>
        </header>
      </div>
    );
  }
}

export default App;
