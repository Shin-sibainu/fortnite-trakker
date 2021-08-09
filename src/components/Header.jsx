import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    padding: theme.spacing(1),
    background: "#39284f",
    marginBottom: theme.spacing(13),
  },
  title: {
    fontFamily: "Anton",

    fontSize: "34px",
    flexGrow: 1,
    marginLeft: theme.spacing(3),
  },
}));

export const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            Fortnite Tracker
          </Typography>
          <Button
            color="inherit"
            style={{ fontSize: 17, fontFamily: "Anton" }}
            href="https://github.com/Shin-sibainu/fortnite-trakker"
          >
            Github
          </Button>
          <Button
            color="inherit"
            style={{ fontSize: 17, fontFamily: "Anton" }}
            href="https://twitter.com/Shin_Engineer"
          >
            Twitter
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
