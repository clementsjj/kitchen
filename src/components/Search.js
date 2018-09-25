import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Cardy from './Cardy';
import Axios from 'axios';

class Search extends Component {
  state = {
    search: '',
    recipes: ''
  };

  onSearchInputChange = event => {
    console.log('Search: ');
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
          Search
        </Button>
      </div>
    );
  }
}

export default Search;
