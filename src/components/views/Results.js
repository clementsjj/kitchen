import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//import ResultCardSample from "../views/ResultCardSample";
import RecipeResultCard from "../views/RecipeResultCard";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addItem, deleteItem, fetchRecipes } from "../../actions";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

let returnedRecipes;

class Results extends Component {
  render() {
    if (this.props.recipes.fetchedRecipes !== null) {
      returnedRecipes = this.props.recipes.fetchedRecipes.map((item, index) => {
        console.log("Item: ", item);
        return <RecipeResultCard item={item} key={index} />;
      });
    } else returnedRecipes = <p />;

    return (
      <Paper elevation={12}>
        <Typography variant="headline" component="h2">
          Results
        </Typography>
        <Typography component="p">Where recipes can go.</Typography>
        <Grid container justify="center">
          {/* <Grid item>
          {[0, 1, 2].map(value => (
            <ResultCardSample />
          ))}
        </Grid> */}
          {returnedRecipes}
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  fridge: state.fridge,
  recipes: state.recipes
});

export default connect(
  mapStateToProps,
  { addItem, deleteItem, fetchRecipes }
)(Results);
