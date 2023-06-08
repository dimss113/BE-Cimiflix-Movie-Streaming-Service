const userRatingRepository = require("../repositories/userRatingRepository");

const getAllUserRating = async () => {
  try {
    const userratings = await userRatingRepository.getAllUserRating();
    return userratings;
  } catch (error) {
    throw error;
  }
};

const addUserRating = async (data) => {
  try {
    const userratings = await userRatingRepository.addUserRating(data);
    return userratings;
  } catch (error) {
    throw error;
  }
};

const getUserRatingById = async (id) => {
  try {
    const userratings = await userRatingRepository.getUserRatingById(id);
    return userratings;
  } catch (error) {
    throw error;
  }
};

const getUserRatingByUserId = async (userId) => {
  try {
    const userratings = await userRatingRepository.getUserRatingByUserId(
      userId
    );
    return userratings;
  } catch (error) {
    throw error;
  }
};

const getUserRatingByMovieId = async (movieId) => {
  try {
    const userratings = await userRatingRepository.getUserRatingByMovieId(
      movieId
    );
    return userratings;
  } catch (error) {
    throw error;
  }
};

const getUserRatingByUserIdAndMovieId = async (userId, movieId) => {
  try {
    const userratings =
      await userRatingRepository.getUserRatingByUserIdAndMovieId(
        userId,
        movieId
      );
    return userratings;
  } catch (error) {
    throw error;
  }
};

const updateUserRating = async (data, id) => {
  try {
    const userratings = await userRatingRepository.updateUserRating(data, id);
    return userratings;
  } catch (error) {
    throw error;
  }
};

const deleteUserRating = async (id) => {
  try {
    const userratings = await userRatingRepository.deleteUserRating(id);
    return userratings;
  } catch (error) {
    throw error;
  }
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
