import React, { Component } from "react";
import { SearchRecipes } from "../containers";
import Search from "../Search";
import Navbar from "../Navbar";
import Fridge from "../Fridge";
import CommonIngredients from "../CommonIngredients";
import { Results } from "../views";

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
      </div>
    );
  }
}

export default Home;
