const router = require("express").Router();
const movieStatusController = require("../controllers/movieStatusController");

router.get("/moviestatuss", movieStatusController.getAllMovieStatus);
router.post("/add-moviestatus", movieStatusController.addMovieStatus);
router.put("/update-moviestatus:id", movieStatusController.updateMovieStatus);
router.delete(
  "/delete-moviestatus/:id",
  movieStatusController.deleteMovieStatus
);
router.get("/get-moviestatus/:id", movieStatusController.getMovieStatusById);

module.exports = router;
