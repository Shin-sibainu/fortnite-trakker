export const db = (defalutsoloData) => {
  const data = [
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

  return data;
};
