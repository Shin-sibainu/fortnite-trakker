import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  progress: {
    textAlign: "center",
  },
}));

export const ErrorMessage = (props) => {
  const classes = useStyle();

  return (
    <div
      className={classes.progress}
      style={{ fontSize: 20, marginTop: "22px", fontFamily: "Anton" }}
    >
      <Typography
        variant="h4"
        style={{ marginBottom: "12px", fontFamily: "Anton" }}
      >
        {props.children}
      </Typography>
    </div>
  );
};
