import { Cards } from "./card/Cards";
import React from "react";
import { Title } from "./title/Title";
import { useState } from "react";
import { Button } from "@material-ui/core";
import {
  CircularProgress,
  Input,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { soloDB } from "../data/soloDB";
import { duoDB } from "../data/duoDB";
import { squadDB } from "../data/squadDB";

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

  const [soloData, setSoloData] = useState(null);
  const [duoData, setDuoData] = useState(null);
  const [squadData, setSquadData] = useState(null);

  const [isSoloOpen, setSoloOpen] = useState(false);
  const [isDuoOpen, setDuoOpen] = useState(false);
  const [isSuqadOpen, setSquadOpen] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    setError(null);
    setPending(true);
    setSoloOpen(null);
    setSoloData(null);

    e.preventDefault();
    //console.log(inputText);
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
        //console.log(data);
        //ソロのデータ生成
        const defalutsoloData = data.lifetime.all.defaultsolo;
        const soloStatues = soloDB(defalutsoloData); //ここをリファクタした。
        setSoloData(soloStatues); //soloのデータが入ってる。

        //デュオのデータ生成。
        const defalutDuoData = data.lifetime.all.defaultduo;
        const duoStatues = duoDB(defalutDuoData); //ここをリファクタした。
        setDuoData(duoStatues); //soloのデータが入ってる。

        //スクワッドのデータ生成。
        const defalutSquadData = data.lifetime.all.defaultsquad;
        const squadStatues = squadDB(defalutSquadData); //ここをリファクタした。
        setSquadData(squadStatues); //soloのデータが入ってる。

        setPending(false);
        setError(null);
        setSoloOpen(true); //デフォルトでソロが表示される
      })
      .catch((error) => {
        setPending(false);
        setSoloData(null);
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
      {soloData && (
        <div style={{ textAlign: "center", fontSize: 25, fontFamily: "Anton" }}>
          Status Result
        </div>
      )}
      {/* ------------タブ処理はここから-------------- */}
      {/* ソロの画面 */}
      {soloData && (
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
      )}
      {/* ------------タブ処理はここまで-------------- */}
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
        {/* submitされたらソロデータが渡される。 */}
        <Cards
          soloStatues={soloData}
          duoStatues={duoData}
          SquadStatues={squadData}
          isSoloOpen={isSoloOpen}
          isDuoOpen={isDuoOpen}
          isSuqadOpen={isSuqadOpen}
        />
      </div>
    </div>
  );
};

/* zRotation */
