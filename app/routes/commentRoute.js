const commentController = require("../controllers/commentController");
const router = require("express").Router();

router.get("", commentController.getAllComment);
router.post("", commentController.addComment);
router.get("/:id", commentController.getCommentById);
router.get("/user/:userId", commentController.getCommentByUserId);
router.get("/movie/:movieId", commentController.getCommentByMovieId);
router.get(
  "/user/:userId/movie/:movieId",
  commentController.getCommentByUserIdAndMovieId
);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;
