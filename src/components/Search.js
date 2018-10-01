import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { fetchIngredients, addItem, deleteItem } from "../actions";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

class Search extends Component {
  constructor(props) {
    super(props);

    this.search = React.createRef();

    this.state = {
      ingredients: "",
      isButtonDisabled: true
    };
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }
  // onSearchInputChange = event => {
  //   console.log("Search: " + event.target.value);
  //   this.state.isButtonDisabled = false;
  //   //console.log(this.state.isButtonDisabled);
  // };

  handleSearch = event => {
    let value = this.search.current.value;
    console.log();
    let updated = Object.assign({}, this.state.ingredients);

    updated = value;
    updated = value.split(",").join("%2C");
    console.log(updated);

    this.setState({
      ingredients: updated
    });
  };

  // onSubmitHandler = event => {
  //   console.log("Search onsubmit");
  // };

  handleSubmitSearch = event => {
    console.log("We Are Handling The Search!!");
    event.preventDefault();

    this.props.fetchIngredients(this.state.ingredients);
    //event.target.reset();
  };

  handleButtonClick = event => {
    console.log("Click: " + event.target.name);
    let updated = Object.assign({}, this.state.fridge);

    if (!this.props.fridge.ingredients.includes(event.target.name)) {
      //console.log('***JJ***');
      this.props.addItem(event.target.name);
    }
  };

  render() {
    const { fetchedIngredients } = this.props.ingredients;
    let tempIngredients;

    console.log("FetchedIngredients: ", fetchedIngredients);
    console.log("fridge: ", this.props.fridge.ingredients);

    if (fetchedIngredients !== null) {
      tempIngredients = fetchedIngredients.map(item => {
        return (
          <Button
            name={item.name}
            item={item.name}
            key={item.item}
            onClick={this.handleButtonClick}>
            {item.name}
          </Button>
        );
      });
    } else {
      tempIngredients = <p>no results.</p>;
    }

    // return (
    //   <div>
    //     <form onSubmit={this.handleSubmitSearch}>
    //       <br />

    //       <input ref={this.search} onKeyUp={this.handleSearch} />

    //       <button>Search for Ingredient</button>
    //       <br />
    //       {tempIngredients}
    //     </form>
    //   </div>
    // );

    //************************************************************************************* */

    return (
      <div>
        <form onSubmit={this.handleSubmitSearch}>
          <TextField
            label="Ingredient Search"
            type="search"
            id="searchInput"
            defaultValue=""
            helperText="Type an ingredient name and click Search"
            margin="normal"
            onChange={this.handleSearch}
            inputRef={this.search}
          />
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            type="submit"
            //onSubmit={this.handleSubmitSearch}
            //onClick={this.handleSubmitSearch}
            //disabled={this.state.isButtonDisabled}
          >
            Search
          </Button>
        </form>
        {tempIngredients}
      </div>
    );
    ///
    ///
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  fridge: state.fridge
});

export default connect(
  mapStateToProps,
  { fetchIngredients, addItem, deleteItem }
)(Search);
