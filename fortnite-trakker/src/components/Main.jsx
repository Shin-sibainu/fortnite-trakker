import { Cards } from "./card/Cards";
import React from "react";
import { Title } from "./title/Title";
import { useState } from "react";
import { Button } from "@material-ui/core";
//import { UseFetch } from "./utils/UseFetch";
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
  const [inputText, setInputText] = useState("");
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    setError(null);
    setPending(true);
    setData(null);
    e.preventDefault();
    console.log(inputText);
    //fetch here
    //この情報をカードの方に持っていきたい。
    fetch(`https://fortnite-api.p.rapidapi.com/stats/${inputText}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "5d9f005d9cmsh913c00abd95dcc3p1ef35ejsn4f0c3ce61d03",
        "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const defalutsoloData = data.lifetime.all.defaultsolo;
        //所望のデータ群{kdr: 3.53 kills: 797 killsPerMatch: 2.51 matchesplayed: 318 minutesplayed: 2208 placetop1: 92 placetop10: 140 placetop25: 183 playersoutlived: 11022 score: 61114 winrate: 28.93
        const statues = [
          {
            id: 1,
            name: "kdr",
            number: defalutsoloData.kdr,
          },
          {
            id: 2,
            name: "kills",
            number: defalutsoloData.kills,
          },
          {
            id: 3,
            name: "killsPerMatch",
            number: defalutsoloData.killsPerMatch,
          },
          {
            id: 4,
            name: "matchesplayed",
            number: defalutsoloData.matchesplayed,
          },
          {
            id: 5,
            name: "minutesplayed",
            number: defalutsoloData.minutesplayed,
          },
          {
            id: 6,
            name: "placetop1",
            number: defalutsoloData.placetop1,
          },
          {
            id: 7,
            name: "placetop10",
            number: defalutsoloData.placetop10,
          },
          {
            id: 8,
            name: "placetop25",
            number: defalutsoloData.placetop25,
          },
          {
            id: 9,
            name: "playersoutlived",
            number: defalutsoloData.playersoutlived,
          },
          {
            id: 10,
            name: "score",
            number: defalutsoloData.score,
          },
          {
            id: 11,
            name: "winrate",
            number: defalutsoloData.winrate,
          },
        ];
        setPending(false);
        setData(statues);
        setError(null);
      })
      .catch((error) => {
        setPending(false);
        setData(null);
        if (error.message === "Cannot read property 'all' of undefined") {
          setError("The player does not exit.");
        }
        if (error.message === "Cannot read property 'kdr' of undefined") {
          setError("Failed to get data.Try again.");
        }
        if (error.message === "Failed to fetch") {
          setError("Network Error.Please try again.");
        }
        console.log(error.message);
      });
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
