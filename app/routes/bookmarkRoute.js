const router = require("express").Router();
const bookmarkController = require("../controllers/bookmarkController");

router.get("", bookmarkController.getAllBookmark);
router.post("", bookmarkController.addBookmark);
router.get("/:id", bookmarkController.getBookmarkById);
router.get("/user/:userId", bookmarkController.getBookmarkByUserId);
router.get("/movie/:movieId", bookmarkController.getBookmarkByMovieId);
router.get(
  "/user/:userId/movie/:movieId",
  bookmarkController.getBookmarkByUserIdAndMovieId
);
router.put("/:id", bookmarkController.updateBookmark);
router.delete("/:id", bookmarkController.deleteBookmark);

module.exports = router;
