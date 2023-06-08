const userRatingService = require("../services/userRatingService");

const getAllUserRating = async (req, res) => {
  userRatingService
    .getAllUserRating()
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const addUserRating = async (req, res) => {
  const data = req.body;
  userRatingService
    .addUserRating(data)
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getUserRatingById = async (req, res) => {
  const id = req.params.id;
  userRatingService
    .getUserRatingById(id)
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getUserRatingByUserId = async (req, res) => {
  const userId = req.params.userId;
  userRatingService
    .getUserRatingByUserId(userId)
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getUserRatingByMovieId = async (req, res) => {
  const movieId = req.params.movieId;
  userRatingService
    .getUserRatingByMovieId(movieId)
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getUserRatingByUserIdAndMovieId = async (req, res) => {
  const userId = req.params.userId;
  const movieId = req.params.movieId;
  userRatingService
    .getUserRatingByUserIdAndMovieId(userId, movieId)
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const updateUserRating = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  userRatingService
    .updateUserRating(data, id)
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const deleteUserRating = async (req, res) => {
  const id = req.params.id;
  userRatingService
    .deleteUserRating(id)
    .then((userratings) => {
      res.json(userratings);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = {
  getAllUserRating,
  addUserRating,
  getUserRatingById,
  getUserRatingByUserId,
  getUserRatingByMovieId,
  getUserRatingByUserIdAndMovieId,
  updateUserRating,
  deleteUserRating,
};
