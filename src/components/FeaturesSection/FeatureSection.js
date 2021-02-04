import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import FeaturesData from "./FeaturesData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: "100px",
  },
  mainHeading: {
    marginTop: "90px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
}));

function FeatureSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Container>
        <Typography
          variant="h3"
          color="secondary"
          className={classes.mainHeading}
        >
          Organize Your Life Your Way
        </Typography>
        <Grid container spacing={2}>
          {FeaturesData.map((feature) => {
            return (
              <Grid item xs={12} sm={4} key={feature.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h4">{feature.title}</Typography>
                    <Typography variant="subtitle1">
                      {feature.subTitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default FeatureSection;
