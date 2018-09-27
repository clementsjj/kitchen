import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Item } from "./views";
import { addItem, deleteItem } from "../actions";

let printIngredients;
const commonIngredients = ["eggs", "milk", "sugar", "flour"];

class CommonIngredients extends Component {
  state = {
    selectedIngredients: ""
  };

  handleClick = event => {
    console.log("Click");
  };

  render() {
    return (
      <div>
        {
          (printIngredients = commonIngredients.map(item => {
            return (
              <Button
                onClick={this.handleClick}
                name={item}
                variant="contained">
                {item}
              </Button>
            );
          }))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { addItem, deleteItem }
)(CommonIngredients);
