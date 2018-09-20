import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Cardy from "./Cardy";

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
        <br />
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Grid container spacing={24} style={{ padding: 24 }}>
          <Grid iem xs={12} sm={6} lg={4} xl={3}>
            <Cardy />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Search;
