const router = require("express").Router();
const movieCastController = require("../controllers/movieCastController");

router.get("/moviecasts", movieCastController.getAllMovieCasts);
router.post("/add-moviecast", movieCastController.addMovieCast);
router.get("/cast-movie/:id", movieCastController.getCastIdByMovieId);
router.get("/movie-cast/:id", movieCastController.getMovieIdByCastId);
router.delete("/delete-moviecast/:id", movieCastController.deleteMovieCastById);
router.put("/update-moviecast/:id", movieCastController.updateMovieCastById);

module.exports = router;
