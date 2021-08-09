/* import { useState, useEffect } from "react";

export const UseFetch = (inputText) => {
  //const [inputText, setInputText] = useState("");
  //エンターを押したときのだけのテキスト情報をステートで管理する？
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setError(null);
    setPending(true);
    setData(null);

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
  }, [data]); //submitしたときのテキスト情報が更新されたときにuseEffect内部が実行される。
  return { error, isPending, data };
};
 */
