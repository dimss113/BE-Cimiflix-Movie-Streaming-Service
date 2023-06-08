const router = require("express").Router();
const movieController = require("../controllers/movieController");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/movies", movieController.getAllMovies);
router.post("/add-movie", movieController.addMovie);
router.put("/update-movie/:id", movieController.updateMovie);
router.delete("/delete-movie/:id", movieController.deleteMovie);
router.get("/movie-photo/:id", movieController.getMoviePhotobyId);
router.get("/movie/:id", movieController.getMoviebyId);
router.get("/movie-slug/:slug", movieController.getMovieBySlug);
router.get("/movies-genre/:id", movieController.getAllMoviesByGenreId);
router.get("/movies-free", movieController.getAllFreeMovies);
router.get("/movies-paid", movieController.getAllPaidMovies);

module.exports = router;
