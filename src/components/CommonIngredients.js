import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Item } from "./views";
import { addItem, deleteItem } from "../actions";
import Fridge from "./Fridge.1";

let printIngredients;
const commonIngredients = ["eggs", "milk", "sugar", "flour"];

class CommonIngredients extends Component {
  state = {
    isDisabled: false
  };

  //*****Old method --- Not working in Chrome*******
  handleClick = event => {
    console.log("CommonIngredientClick: " + event.target.name);
    let updated = Object.assign({}, this.state.fridge);

    if (!this.props.fridge.ingredients.includes(event.target.name)) {
      //console.log('***JJ***');
      this.props.addItem(event.target.name);
    }
  };

  //*****NEW METHOD*****
  // handleClick = (e, name) => {
  //   console.log("Click: " + name);
  //   let updated = Object.assign({}, this.state.fridge);
  //   if (!this.props.fridge.ingredients.includes(name)) {
  //     this.props.addItem(name);
  //   }
  // };

  render() {
    return (
      <div>
        <h4>Common Fridge Ingredients</h4>
        {
          (printIngredients = commonIngredients.map(item => {
            return (
              <Button
                onClick={e => {
                  this.handleClick(e, item.name);
                }}
                name={item}
                variant="outlined"
                color="primary"
                //disabled={this.state.isDisabled}
                //Would like to disable the button once it is clicked, but all buttons are disabled with this active
              >
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
  fridge: state.fridge
});

export default connect(
  mapStateToProps,
  { addItem, deleteItem }
)(CommonIngredients);
