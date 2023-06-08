const { bookmark } = require("../models");

const getAllBookmark = () => {
  return bookmark.findAll();
};

const addBookmark = (data) => {
  return bookmark.create(data);
};

const getBookmarkById = (id) => {
  return bookmark.findOne({
    where: {
      id: id,
    },
  });
};

const getBookmarkByUserId = (userId) => {
  return bookmark.findAll({
    where: {
      user_id: userId,
    },
  });
};

const getBookmarkByMovieId = (movieId) => {
  return bookmark.findAll({
    where: {
      movie_id: movieId,
    },
  });
};

const getBookmarkByUserIdAndMovieId = (userId, movieId) => {
  return bookmark.findAll({
    where: {
      user_id: userId,
      movie_id: movieId,
    },
  });
};

const updateBookmark = (data, id) => {
  return bookmark.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteBookmark = (id) => {
  return bookmark.destroy({
    where: {
      id: id,
    },
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
