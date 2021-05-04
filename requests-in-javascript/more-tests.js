const axios = require("axios");

const url = "http://localhost:5000/constellations";

axios
    .get(url)
    .then((response) => {
        let result = response.data.filter((constellation) => {
            return constellation.starsWithPlanets < 10 && constellation.quadrant === "SQ1";
        });
        console.log(result);
        console.log(response.status);

    })
    .catch((error) => {
        console.log(error.message);
    });

axios
    .post(url, {
        name: "Cassiopeia",
        meaning: "Cassia juice",
        starsWithPlanets: 14,
        quadrant: "NQ1",
    })
    .then((response) => {
        console.log(response.data);
    });

axios
    .delete(`${url}/5NGGfWU`);

axios
    .get(`${url}/5NGGfWU`);

