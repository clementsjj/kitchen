import React from "react";
//import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import samplePic from "../../assets/images/sudo-rm.gif";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140

    //objectFit: "cover"
  }
};

function ResultCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea justify="center">
        <CardMedia
          className={classes.media}
          image={samplePic}
          title="Sudo rm"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            A Recipe For Disaster
          </Typography>
          <Typography component="p">What is Redux? What is Life?</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ResultCard);
