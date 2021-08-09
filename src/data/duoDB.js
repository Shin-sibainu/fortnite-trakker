export const duoDB = (defalutDuoData) => {
  const duoData = [
    {
      id: 1,
      name: "kdr",
      number: defalutDuoData.kdr,
    },
    {
      id: 2,
      name: "kills",
      number: defalutDuoData.kills,
    },
    {
      id: 3,
      name: "killsPerMatch",
      number: defalutDuoData.killsPerMatch,
    },
    {
      id: 4,
      name: "matchesplayed",
      number: defalutDuoData.matchesplayed,
    },
    {
      id: 5,
      name: "minutesplayed",
      number: defalutDuoData.minutesplayed,
    },
    {
      id: 6,
      name: "placetop1",
      number: defalutDuoData.placetop1,
    },
    {
      id: 7,
      name: "placetop10",
      number: defalutDuoData.placetop10,
    },
    {
      id: 8,
      name: "placetop25",
      number: defalutDuoData.placetop25,
    },
    {
      id: 9,
      name: "playersoutlived",
      number: defalutDuoData.playersoutlived,
    },
    {
      id: 10,
      name: "score",
      number: defalutDuoData.score,
    },
    {
      id: 11,
      name: "winrate",
      number: defalutDuoData.winrate,
    },
  ];

  return duoData;
};
