import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ResultCardSample from "../views/ResultCardSample";
import Grid from "@material-ui/core/Grid";

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

function Results(props) {
  return (
    <Paper elevation={12}>
      <Typography variant="headline" component="h2">
        Results
      </Typography>
      <Typography component="p">Where recipes can go.</Typography>
      <Grid container justify="center">
        <Grid item>
          {[0, 1, 2].map(value => (
            <ResultCardSample />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Results;
