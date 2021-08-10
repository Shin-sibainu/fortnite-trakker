import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: theme.spacing(14),
  },
  buttonFlex: {
    display: "flex",
  },
}));

export const TabButton = ({ setSoloOpen, setDuoOpen, setSquadOpen }) => {
  const classes = useStyle();

  const handleSoloButton = () => {
    //solo結果の画面を表示する。
    setSoloOpen(true);
    setDuoOpen(false);
    setSquadOpen(false);
  };
  const handleDuoButton = () => {
    //solo結果の画面を表示する。
    setSoloOpen(false);
    setDuoOpen(true);
    setSquadOpen(false);
  };
  const handleSquadButton = () => {
    //solo結果の画面を表示する。
    setSoloOpen(false);
    setDuoOpen(false);
    setSquadOpen(true);
  };

  return (
    <div className={classes.tabContainer}>
      <div className={classes.buttonFlex}>
        <Button className={classes.soloButton} onClick={handleSoloButton}>
          Solo
        </Button>
        <Button className={classes.duoButton} onClick={handleDuoButton}>
          Duo
        </Button>
        <Button className={classes.squadButton} onClick={handleSquadButton}>
          Squad
        </Button>
      </div>
    </div>
  );
};
