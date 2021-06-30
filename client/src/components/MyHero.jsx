import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "./MyHeroStyles.js";

const MyHero = () => {

    const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          1
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Degrees, Tau Radians, and Pi Radians
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary" paragraph>
          We start with these skills because being able to do them quickly and
          fluently will reduce "mental friction" as we eventually study more
          challenging ideas.
        </Typography>
      </Container>
    </div>
  );
};

export default MyHero;
