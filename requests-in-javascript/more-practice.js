const axios = require("axios");
const BASE_URL = "http://localhost:5000";

/*
const leo = {
    name: "Leo",
    meaning: "Lion",
    starsWithPlanets: 19,
    quadrant: "NQ2",
};

const cade = {
    name: "Cade",
    meaning: "Barrel-shaped",
    starstWithPlanets: 100,
    quadrant: "ABCXYZ",
    favoriteColor: "Yellow"
};

const fleur = {
    name: "Fleur",
    meaning: "Flower",
    starstWithPlanets: 18,
    quadrant: "FL0"
};
*/

async function getConstellationNameById(id) {
    try {
        const { data } = await axios.get(`${BASE_URL}/constellations/${id}`);
        return data.name;
    } catch (error) {
        throw `Constellation with id of ${id} could not be found.`;
    }
};
getConstellationNameById("n2OEOzp").then(console.log);









/*
function bulkDelete(ids) {
    const promises = ids.map((id) => {
        return axios
            .delete(`${BASE_URL}/constellations/${id}`)
            .then(() => {
                return({id})
            })
    })
    return Promise.all(promises)
}
*/

/*
function getConstellations(ids) {
    const promises = ids.map((id) => {
        return axios.get(`${BASE_URL}/constellations/${id}`);
    });
    return Promise.all(promises);

};

const ids = ["KGQIwSq", "32TN5F8"];
getConstellations(ids).then(console.log);
*/

/*
Promise.all([
    axios.get(`${BASE_URL}/constellations/UEUrlfX`),
    axios.get(`${BASE_URL}/constellations/zb8QvVt`),
    axios.get(`${BASE_URL}/constellations/32TN5F8`),
  ]).then((results) => {
    console.log(results[0].data);
    console.log(results[1].data);
    console.log(results[2].data);
  })
  .catch((error) => {
      console.log(error)
  });
*/

/*
function updateIfExists(id, body) {
    let newURL = `${url}/${id}`
    axios
        .get(newURL)
        .then(() => {
            return axios.put(newURL, body);
        })
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            return error.message;
        })
};
console.log(updateIfExists("ABCXYZ", cade))
*/

/*
axios
    .get(url)
    .then(({ data }) => {
        return data.find(({ name }) => name === cade.name);
    })
    .then((exists) => {
        if (exists) throw `Constellation "${cade.name} already exists.`;
        return axios.post(url, cade);
    })
    .then(({ data }) => console.log(data))
    .catch(console.log);
*/

/*
axios
    .get(url)
    .then(({ data }) => {
        const exists = data.find(({ name }) => name === leo.name);
        if (exists) throw `Constellation "${leo.name}" already exists.`;
        return axios
            .post(url, leo)
            .then(({ data }) => console.log(data));
    })
    .catch(console.log);
*/

/*
axios
    .post(url, leo)
    .then(({ data }) => {
        console.log(data);
        axios
            .get(url)
            .then(({ data }) => console.log(data))
    });
*/

/*
axios
    .post(url, leo)
    .then(({ data }) => console.log(data));

axios
    .get(url)
    .then(({ data }) => console.log(data));
*/