import { Input, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6),
  },
  titleName: {
    textAlign: "center",
    marginTop: theme.spacing(5),
    fontSize: "60px",
  },
  input: {
    width: "420px",
    height: "40px",
  },
}));
export const InputForSearch = () => {
  const classes = useStyle();
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    //fetch here
  };

  return (
    <div className="inputForSearch">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Enter Player_name"
          inputProps={{ "aria-label": "description" }}
          className={classes.input}
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

/* zRotation */
