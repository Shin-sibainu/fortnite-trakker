import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
  },
  grid: {
    padding: 58,
  },
}));

export const Cards = () => {
  const classes = useStyle();

  const statues = [
    {
      winCount: 300,
    },
    { victoryCount: 34 },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography>win_count</Typography>
            <Typography style={{ fontSize: 30 }}>300</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography>win_count</Typography>
            <Typography style={{ fontSize: 30 }}>34</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography>win_count</Typography>
            <Typography style={{ fontSize: 30 }}>34</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography>win_count</Typography>
            <Typography style={{ fontSize: 30 }}>34</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography>win_count</Typography>
            <Typography style={{ fontSize: 30 }}>34</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
