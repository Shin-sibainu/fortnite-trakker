import { useState } from "react";

export const UseFetch = (url) => {
  const [data, setData] = useState(null);

  fetch(url, {
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
      setData(data);
    });

  return data;
};
