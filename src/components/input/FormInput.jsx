import React, { useState } from "react";
import { makeStyles, Input } from "@material-ui/core";
import { soloDB } from "../../data/soloDB";
import { duoDB } from "../../data/duoDB";
import { squadDB } from "../../data/squadDB";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6),
  },
  input: {
    fontFamily: "Anton",
    width: "420px",
    height: "40px",
  },
}));
export const FormInput = ({
  setSoloData,
  setDuoData,
  setSquadData,
  setPending,
  setError,
  setSoloOpen,
}) => {
  const classes = useStyle();
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    setError(null);
    setPending(true);
    setSoloOpen(null);
    setSoloData(null);

    e.preventDefault();
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

  return (
    <div>
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
