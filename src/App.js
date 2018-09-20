import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
//import Courselist from "./components/Courselist";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Navbar />
        <Search />
        <div className="mdc-card">Simple</div>
      </div>
    );
  }
}

export default App;
