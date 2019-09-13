import React, { Component, useState } from "react";
import SmurfProvider from "./SmurfProvider";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context API</h1>
        <SmurfProvider />
      </div>
    );
  }
}

export default App;
