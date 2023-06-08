const { likes } = require("../models");

const getAllLikes = () => {
  return likes.findAll();
};

const addLike = (data) => {
  return likes.create(data);
};

const updateLike = (data, id) => {
  return likes.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteLike = (id) => {
  return likes.destroy({
    where: {
      id: id,
    },
  });
};

const getLikebyId = (id) => {
  return likes.findOne({
    where: {
      id: id,
    },
  });
};

const getLikeByUserId = (userId) => {
  return likes.findAll({
    where: {
      user_id: userId,
    },
  });
};

const getLikeByMovieId = (movieId) => {
  return likes.findAll({
    where: {
      movie_id: movieId,
    },
  });
};

const getLikeByUserIdAndMovieId = (userId, movieId) => {
  return likes.findAll({
    where: {
      user_id: userId,
      movie_id: movieId,
    },
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
