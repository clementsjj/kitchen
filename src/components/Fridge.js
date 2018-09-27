import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

function Fridge(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">
          The Fridge
        </Typography>
        <Typography component="p">Where items can go.</Typography>
      </CardContent>
    </Card>
  );
}

export default Fridge;
