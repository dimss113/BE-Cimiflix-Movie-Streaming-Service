const bookmarkService = require("../services/bookmarkService");

const getAllBookmark = async (req, res) => {
  bookmarkService
    .getAllBookmark()
    .then((bookmarks) => {
      res.status(200).json({
        status: "Success",
        message: "Success get all data bookmarks",
        data: movies,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

const addBookmark = async (req, res) => {
  const data = req.body;
  bookmarkService
    .addBookmark(data)
    .then((bookmark) => {
      res.status(200).json({
        status: "Success",
        message: "Success add data bookmark",
        data: bookmark,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

const getBookmarkById = async (req, res) => {
  const id = req.params.id;
  bookmarkService
    .getBookmarkById(id)
    .then((bookmark) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data bookmark by id",
        data: bookmark,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

const getBookmarkByUserId = async (req, res) => {
  const userId = req.params.userId;
  bookmarkService
    .getBookmarkByUserId(userId)
    .then((bookmarks) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data bookmark by user id",
        data: bookmarks,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

const getBookmarkByMovieId = async (req, res) => {
  const movieId = req.params.movieId;
  bookmarkService
    .getBookmarkByMovieId(movieId)
    .then((bookmarks) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data bookmark by movie id",
        data: bookmarks,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

const getBookmarkByUserIdAndMovieId = async (req, res) => {
  const userId = req.params.userId;
  const movieId = req.params.movieId;
  bookmarkService
    .getBookmarkByUserIdAndMovieId(userId, movieId)
    .then((bookmarks) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data bookmark by user id and movie id",
        data: bookmarks,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

const updateBookmark = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  bookmarkService
    .updateBookmark(data, id)
    .then((bookmark) => {
      res.status(200).json({
        status: "Success",
        message: "Success update data bookmark",
        data: bookmark,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

const deleteBookmark = async (req, res) => {
  const id = req.params.id;
  bookmarkService
    .deleteBookmark(id)
    .then((bookmark) => {
      res.status(200).json({
        status: "Success",
        message: "Success delete data bookmark",
        data: bookmark,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "Failed",
        message: "Internal server error",
        data: [],
      });
    });
};

module.exports = {
  getAllBookmark,
  addBookmark,
  getBookmarkById,
  getBookmarkByUserId,
  getBookmarkByMovieId,
  getBookmarkByUserIdAndMovieId,
  updateBookmark,
  deleteBookmark,
};
