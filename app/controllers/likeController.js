const likeService = require("../services/likeService");

const getAllLikes = async (req, res) => {
  likeService
    .getAllLikes()
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data like",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const addLike = async (req, res) => {
  const data = req.body;

  likeService
    .addLike(data)
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success add data like",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const updateLike = async (req, res) => {
  const data = req.body;
  const id = req.params.id;

  likeService
    .updateLike(data, id)
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success update data like",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const deleteLike = async (req, res) => {
  const id = req.params.id;

  likeService
    .deleteLike(id)
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success delete data like",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getLikebyId = async (req, res) => {
  const id = req.params.id;

  likeService
    .getLikebyId(id)
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data like by id",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getLikeByUserId = async (req, res) => {
  const userId = req.params.userId;

  likeService
    .getLikeByUserId(userId)
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data like by user id",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getLikeByMovieId = async (req, res) => {
  const movieId = req.params.movieId;

  likeService

    .getLikeByMovieId(movieId)
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data like by movie id",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getLikeByUserIdAndMovieId = async (req, res) => {
  const userId = req.params.userId;

  const movieId = req.params.movieId;

  likeService

    .getLikeByUserIdAndMovieId(userId, movieId)
    .then((likes) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data like by user id and movie id",
        data: likes,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

module.exports = {
  getAllLikes,
  addLike,
  updateLike,
  deleteLike,
  getLikebyId,
  getLikeByUserId,
  getLikeByMovieId,
  getLikeByUserIdAndMovieId,
};
