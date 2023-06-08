const { user_rating } = require("../models");

const getAllUserRating = () => {
  return user_rating.findAll();
};

const addUserRating = (data) => {
  return user_rating.create(data);
};

const getUserRatingById = (id) => {
  return user_rating.findOne({
    where: {
      id: id,
    },
  });
};

const getUserRatingByUserId = (userId) => {
  return user_rating.findAll({
    where: {
      user_id: userId,
    },
  });
};

const getUserRatingByMovieId = (movieId) => {
  return user_rating.findAll({
    where: {
      movie_id: movieId,
    },
  });
};

const getUserRatingByUserIdAndMovieId = (userId, movieId) => {
  return user_rating.findAll({
    where: {
      user_id: userId,
      movie_id: movieId,
    },
  });
};

const updateUserRating = (data, id) => {
  return user_rating.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteUserRating = (id) => {
  return user_rating.destroy({
    where: {
      id: id,
    },
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
