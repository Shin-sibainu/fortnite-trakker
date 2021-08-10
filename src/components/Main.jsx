import { Cards } from "./card/Cards";
import React from "react";
import { Title } from "./title/Title";
import { useState } from "react";
import { FormInput } from "./input/FormInput";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { ResultTitle } from "./title/ResultTitle";
import { TabButton } from "./button/TabButton";
import { ErrorMessage } from "../error/ErrorMessage";

const useStyle = makeStyles((theme) => ({
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

  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const [soloData, setSoloData] = useState(null);
  const [duoData, setDuoData] = useState(null);
  const [squadData, setSquadData] = useState(null);

  const [isSoloOpen, setSoloOpen] = useState(false);
  const [isDuoOpen, setDuoOpen] = useState(false);
  const [isSuqadOpen, setSquadOpen] = useState(false);

  return (
    <div className="main-for-background">
      <div className={classes.titleInputArea}>
        <Title />
        <div className="input">
          <FormInput
            setPending={setPending}
            setError={setError}
            setSoloOpen={setSoloOpen}
            setSoloData={setSoloData}
            setDuoData={setDuoData}
            setSquadData={setSquadData}
          />
        </div>
      </div>
      {soloData && <ResultTitle> Status Result </ResultTitle>}
      {/* ------------タブ処理はここから-------------- */}
      {soloData && (
        <TabButton
          setSoloOpen={setSoloOpen}
          setDuoOpen={setDuoOpen}
          setSquadOpen={setSquadOpen}
        />
      )}
      {/* ------------タブ処理はここまで-------------- */}
      {isPending && (
        <div className={classes.progress}>
          <CircularProgress size={100} style={{ marginTop: "22px" }} />
        </div>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
