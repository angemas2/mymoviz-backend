var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API = process.env.API_KEY;

console.log(API);

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate`;

router.get("/movies", (req, res) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json({ movies: data.results });
    });
});

module.exports = router;
