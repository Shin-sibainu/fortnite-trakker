import { Cards } from "./card/Cards";
import React from "react";
import { Title } from "./title/Title";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { UseFetch } from "./utils/UseFetch";
import {
  CircularProgress,
  Input,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6),
  },
  titleInputArea: {
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
  titleName: {
    fontFamily: "Anton",
    textAlign: "center",
    marginTop: theme.spacing(5),
    fontSize: "60px",
  },
  input: {
    fontFamily: "Anton",
    width: "420px",
    height: "40px",
  },
  progress: {
    textAlign: "center",
  },
  tabContainer: {
    marginLeft: theme.spacing(14),
  },
  buttonFlex: {
    display: "flex",
  },
  soloButton: {},
}));
export const Main = () => {
  const classes = useStyle();
  const [inputText, setInputText] = useState(""); //デフォルトは空だからエラーになる。
  const [onSubmit, isOnSubmit] = useState(false);
  //最初にUseFetchは呼んだほうがいいかも。
  const data = null; //最初に絶対呼ばれる。
  const isPending = false; //最初に絶対呼ばれる。
  const error = null; //最初に絶対呼ばれる。
  const { data, isPending, error } = UseFetch(inputText);

  useEffect(() => {}, [onSubmit]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    //submitbuttonが押されたかどうかを通知する。
    isOnSubmit(!onSubmit);
  };

  return (
    <div className="main-for-background">
      <div className={classes.titleInputArea}>
        <Title />
        <div className="input">
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
      </div>
      {data && (
        <div style={{ textAlign: "center", fontSize: 25, fontFamily: "Anton" }}>
          Status Result
        </div>
      )}
      {data && (
        <div className={classes.tabContainer}>
          <div className={classes.buttonFlex}>
            <Button className={classes.soloButton}>Solo</Button>
            <Button>Duo</Button>
            <Button>Squid</Button>
          </div>
        </div>
      )}
      {isPending && (
        <div className={classes.progress}>
          <CircularProgress size={100} style={{ marginTop: "22px" }} />
        </div>
      )}
      {error && (
        <div
          className={classes.progress}
          style={{ fontSize: 20, marginTop: "22px", fontFamily: "Anton" }}
        >
          <Typography
            variant="h4"
            style={{ marginBottom: "12px", fontFamily: "Anton" }}
          >
            {error}
          </Typography>
        </div>
      )}
      <div className="cardArea">
        {/* inputされたらデータが渡される。 */}
        <Cards statues={data} />
      </div>
    </div>
  );
};

/* zRotation */
