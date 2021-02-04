import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import HeroImage from "../../images/heroImg.png";
import "./Hero.css";
const useStyles = makeStyles((theme) => ({
  heroSection: {
    background: "#EFF1F3",
    height: "100vh",
  },
  mainHeading: {
    fontFamily: "Montserrat",
    fontSize: "6rem",
    // fontWeight: "700",
    marginTop: "3rem",
  },
  subHeading: {
    fontFamily: "Montserrat",
    fontSize: "2rem",
  },
  // heroImage: {
  //   marginTop: "3rem",
  //   width: "500px",
  // },
}));

function Hero() {
  const classes = useStyles();
  return (
    <>
      <main className={classes.heroSection}>
        <Container>
          <Grid container direction="row">
            <Grid item xs={12} sm={12} md={6}>
              <Typography
                variant="h1"
                color="primary"
                className={classes.mainHeading}
              >
                Stay On Top of your task
              </Typography>
              <Typography
                variant="subtitle1"
                color="secondary"
                className={classes.subHeading}
              >
                Organize your day, crossout your tasks and be productive whilst
                at play
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className="imageSection">
                <img src={HeroImage} alt="Hero" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Hero;
