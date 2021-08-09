export const squadDB = (defalutSquadData) => {
  const squadData = [
    {
      id: 1,
      name: "kdr",
      number: defalutSquadData.kdr,
    },
    {
      id: 2,
      name: "kills",
      number: defalutSquadData.kills,
    },
    {
      id: 3,
      name: "killsPerMatch",
      number: defalutSquadData.killsPerMatch,
    },
    {
      id: 4,
      name: "matchesplayed",
      number: defalutSquadData.matchesplayed,
    },
    {
      id: 5,
      name: "minutesplayed",
      number: defalutSquadData.minutesplayed,
    },
    {
      id: 6,
      name: "placetop1",
      number: defalutSquadData.placetop1,
    },
    {
      id: 7,
      name: "placetop10",
      number: defalutSquadData.placetop10,
    },
    {
      id: 8,
      name: "placetop25",
      number: defalutSquadData.placetop25,
    },
    {
      id: 9,
      name: "playersoutlived",
      number: defalutSquadData.playersoutlived,
    },
    {
      id: 10,
      name: "score",
      number: defalutSquadData.score,
    },
    {
      id: 11,
      name: "winrate",
      number: defalutSquadData.winrate,
    },
  ];

  return squadData;
};
