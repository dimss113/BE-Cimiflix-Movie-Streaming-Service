const router = require("express").Router();
const userRatingController = require("../controllers/userRatingController");

router.get("", userRatingController.getAllUserRating);
router.post("", userRatingController.addUserRating);
router.get("/:id", userRatingController.getUserRatingById);
router.get("/user/:userId", userRatingController.getUserRatingByUserId);
router.get("/movie/:movieId", userRatingController.getUserRatingByMovieId);
router.get(
  "/user/:userId/movie/:movieId",
  userRatingController.getUserRatingByUserIdAndMovieId
);
router.put("/:id", userRatingController.updateUserRating);
router.delete("/:id", userRatingController.deleteUserRating);

module.exports = router;
