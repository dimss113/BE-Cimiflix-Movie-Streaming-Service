const commentRepository = require("../repositories/commentRepository");

const getAllComment = async () => {
  try {
    const comments = await commentRepository.getAllComment();
    return comments;
  } catch (error) {
    throw error;
  }
};

const addComment = async (data) => {
  try {
    const comments = await commentRepository.addComment(data);
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentById = async (id) => {
  try {
    const comments = await commentRepository.getCommentById(id);
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentByUserId = async (userId) => {
  try {
    const comments = await commentRepository.getCommentByUserId(userId);
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentByMovieId = async (movieId) => {
  try {
    const comments = await commentRepository.getCommentByMovieId(movieId);
    return comments;
  } catch (error) {
    throw error;
  }
};

const getCommentByUserIdAndMovieId = async (userId, movieId) => {
  try {
    const comments = await commentRepository.getCommentByUserIdAndMovieId(
      userId,
      movieId
    );
    return comments;
  } catch (error) {
    throw error;
  }
};

const updateComment = async (data, id) => {
  try {
    const comments = await commentRepository.updateComment(data, id);
    return comments;
  } catch (error) {
    throw error;
  }
};

const deleteComment = async (id) => {
  try {
    const comments = await commentRepository.deleteComment(id);
    return comments;
  } catch (error) {
    throw error;
  }
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
