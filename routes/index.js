const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", function(req, res) {
    Movie.find()
        .then((results) => {
            console.log("movies found:", results);
            res.render("movies", { movies: results });
        })
        .catch((err) => {
            console.log("Something went wrong", err);
        });
});

router.get("/movie/:movieId", function(req, res) {
    Movie.findById(req.params.movieId)
        .then((results) => {
            console.log("movie was found:", results);
            res.render("movie", results);
        })
        .catch((err) => {
            console.log("Something went wrong", err);
        });
});
module.exports = router;