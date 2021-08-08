import { Cards } from "./card/Cards";
import React from "react";
import { Title } from "./title/Title";
import { useState } from "react";
//import { UseFetch } from "./utils/UseFetch";
import { Input, makeStyles } from "@material-ui/core";

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
export const Main = () => {
  const classes = useStyle();
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    //fetch here
    //この情報をカードの方に持っていきたい。
    fetch("https://fortnite-api.p.rapidapi.com/stats/zRotation", {
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
        setData(statues);
      });
  };

  return (
    <div className="main">
      <div className="title-input-area" style={{ textAlign: "center" }}>
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
        <div style={{ textAlign: "center", fontSize: 25 }}>
          Your Status Result
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
