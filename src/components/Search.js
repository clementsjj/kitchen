import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Cardy from "./Cardy";
import Axios from "axios";

class Search extends Component {
  state = {
    search: "",
    recipes: ""
  };

  onSearchInputChange = event => {
    console.log("Search: " + event.target.value);
  };

  onSubmitHandler = event => {
    console.log("Search onsubmit");
  };

  render() {
    return (
      <div>
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          placeholder="Search for Ingredients"
          margin="normal"
          onChange={this.onSearchInputChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.onSubmitHandler}>
          Search
        </Button>
      </div>
    );
  }
}

//const mapStateToProps

export default Search;
