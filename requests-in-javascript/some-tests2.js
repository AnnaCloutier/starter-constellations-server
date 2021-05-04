const axios = require("axios");
const url = "http://localhost:5000/constellations";

function getAllNames() {
    axios
        .get(url)
        .then((response) => {
            const result = response.data.map((constellation) => {
                return constellation.name
            });
                console.log(result);            
        });
};
//console.log(getAllNames())

function getConstellationsByQuadrant(quadrant) {
    axios
        .get(url)
        .then((response) => {
            let result = response.data.filter((constellation) => {
                return constellation.quadrant === quadrant
            });
            console.log(result);
        })
        .catch((error) => {
            console.log(error.message);
        })
};
console.log(getConstellationsByQuadrant("SQ1"))