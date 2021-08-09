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
    padding: 28,
  },
}));

export const Cards = (props) => {
  const {
    soloStatues,
    duoStatues,
    SquadStatues,
    isSoloOpen,
    isDuoOpen,
    isSuqadOpen,
  } = props;
  //受け取ったjsonデータから必要な情報だけ配列に格納する⇨map関数を使って１つずつ取り出す。
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        {isSoloOpen &&
          soloStatues.map((soloStatus) => (
            <Grid item xs={12} sm={3} key={soloStatus.id}>
              <Paper className={classes.paper}>
                <Typography style={{}}>{soloStatus.name}</Typography>
                <Typography style={{ fontSize: 30, fontFamily: "Anton" }}>
                  {soloStatus.number}
                </Typography>
              </Paper>
            </Grid>
          ))}
        {isDuoOpen &&
          duoStatues.map((duostatus) => (
            <Grid item xs={12} sm={3} key={duostatus.id}>
              <Paper className={classes.paper}>
                <Typography style={{}}>{duostatus.name}</Typography>
                <Typography style={{ fontSize: 30, fontFamily: "Anton" }}>
                  {duostatus.number}
                </Typography>
              </Paper>
            </Grid>
          ))}
        {isSuqadOpen &&
          SquadStatues.map((squadStatus) => (
            <Grid item xs={12} sm={3} key={squadStatus.id}>
              <Paper className={classes.paper}>
                <Typography style={{}}>{squadStatus.name}</Typography>
                <Typography style={{ fontSize: 30, fontFamily: "Anton" }}>
                  {squadStatus.number}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
