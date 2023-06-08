const router = require("express").Router();
const likeController = require("../controllers/likeController");

router.get("/likes", likeController.getAllLikes);
router.post("/add-like", likeController.addLike);
router.put("/update-like/:id", likeController.updateLike);
router.delete("/delete-like/:id", likeController.deleteLike);
router.get("/like/:id", likeController.getLikebyId);
router.get("/like-by-user/:userId", likeController.getLikeByUserId);
router.get("/like-by-movie/:movieId", likeController.getLikeByMovieId);
router.get(
  "/like-by-user-movie/:userId/:movieId",
  likeController.getLikeByUserIdAndMovieId
);


module.exports = router;
