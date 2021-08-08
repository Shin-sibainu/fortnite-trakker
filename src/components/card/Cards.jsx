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

export const Cards = (props) => {
  const { statues } = props;
  //受け取ったjsonデータから必要な情報だけ配列に格納する⇨map関数を使って１つずつ取り出す。
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        {statues &&
          statues.map((status) => (
            <Grid item xs={12} sm={3} key={status.id}>
              <Paper className={classes.paper}>
                <Typography>{status.name}</Typography>
                <Typography style={{ fontSize: 30 }}>
                  {status.number}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
