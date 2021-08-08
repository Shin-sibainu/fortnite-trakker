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
    background: "black",
  },
  title: {
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
            Fortnite Trakker
          </Typography>
          <Button color="inherit" style={{ fontSize: 17 }}>
            Github
          </Button>
          <Button color="inherit" style={{ fontSize: 17 }}>
            Twitter
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
