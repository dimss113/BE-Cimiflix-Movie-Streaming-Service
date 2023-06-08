const { comment } = require("../models");

const getAllComment = () => {
  return comment.findAll();
};

const addComment = (data) => {
  return comment.create(data);
};

const getCommentById = (id) => {
  return comment.findOne({
    where: {
      id: id,
    },
  });
};

const getCommentByUserId = (userId) => {
  return comment.findAll({
    where: {
      user_id: userId,
    },
  });
};

const getCommentByMovieId = (movieId) => {
  return comment.findAll({
    where: {
      movie_id: movieId,
    },
  });
};

const getCommentByUserIdAndMovieId = (userId, movieId) => {
  return comment.findAll({
    where: {
      user_id: userId,
      movie_id: movieId,
    },
  });
};

const updateComment = (data, id) => {
  return comment.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteComment = (id) => {
  return comment.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllComment,
  addComment,
  getCommentById,
  getCommentByUserId,
  getCommentByMovieId,
  getCommentByUserIdAndMovieId,
  updateComment,
  deleteComment,
};
