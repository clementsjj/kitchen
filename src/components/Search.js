import React, { Component } from "react";
import Grid from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class Search extends Component {
  onSearchInputChange = event => {
    console.log("Search: ");
  };
  render() {
    return (
      <div>
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          placeholder="Search for Something"
          margin="normal"
          onChange={this.onSearchInputChange}
        />
      </div>
    );
  }
}

export default Search;
