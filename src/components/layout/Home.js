import React, { Component } from "react";
import { SearchIngredients } from "../containers";
import Search from "../Search";
import Navbar from "../Navbar";
import Fridge from "../Fridge";
import CommonIngredients from "../CommonIngredients";
import { Results } from "../views";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <br />
        <CommonIngredients />
        <br />
        <Fridge />
        <br />
        <Results />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Home;
