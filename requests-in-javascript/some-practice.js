const axios = require("axios");
const url = "http://localhost:5000";

function index() {
    axios
        .get(`${url}/constellations`)
        .then((response) => {
            console.log(response.data)
        })
};

//console.log(index())

function create(body) {
    axios
        .post(`${url}/constellations`, body)
        .then((response) => {
            console.log(response.data)
        })
};

/*
const body = {
    name: "Triangulum",
    meaning: "Triangle",
    starsWithPlanets: 3,
    quadrant: "NQ1",
  };

*/  
//console.log(create(body))

function show(id) {
    let fullURL = `${url}/constellations`
    axios
        .get(`${fullURL}/${id}`)
        .then((response) => {
            console.log(response.data)
            })
};

const id = "dFBbdkr";

//console.log(show(id))

function update(id, body) {
    let fullURL = `${url}/constellations/`;
    axios
        .put(`${fullURL}${id}`, body)
        .then((response) => {
            console.log(response.data)
        })
};

const data = {
    id: "abc-def",
    name: "Triangulum",
    meaning: "Triangle",
    starsWithPlanets: 3,
    quadrant: "NQ1",
  };
  const body = {
    ...data,
    meaning: "the Triangle",
  };

//  console.log(update(id, body))

function destroy(id) {
    let fullURL = `${url}/constellations/`;
    axios
        .delete(`${fullURL}${id}`)
        .then((response) => console.log(response.data))
};

let id = "abc-def"
console.log(destroy(id));