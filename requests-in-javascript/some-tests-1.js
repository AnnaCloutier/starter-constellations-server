const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function getConstellations(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    return axios.get(url);
  });
  return Promise.all/*Settled*/(promises);
};


const ids = ["KGQIwSq", "32TN5F8"];
getConstellations(ids).then(console.log);



/*
new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    random > 5 ? resolve(random) : reject(random);
  })
    .then((response) => {
      console.log("Resolved!", response);
//      return response;
    })
    .catch((response) => {
      console.log("Rejected!", response);
//      return response;
    })
    .then((response) => {
      console.log("Add 10", response + 10);
    });
*/