import React, { Component } from "react";
import bulle from "./bulle.png";
import Greeting from "./Greeting";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bulle} className="App-logo" alt="logo" />
          <Greeting />
        </header>
      </div>
    );
  }
}

export default App;
