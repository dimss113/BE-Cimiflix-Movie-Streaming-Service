const likeRepository = require("../repositories/likeRepository");

const getAllLikes = async () => {
  try {
    const likes = await likeRepository.getAllLikes();
    return likes;
  } catch (err) {
    throw new Error(err);
  }
};

const addLike = async (data) => {
  try {
    const likes = await likeRepository.addLike(data);
    return likes;
  } catch (err) {
    throw new Error(err);
  }
};

const updateLike = async (data, id) => {
  try {
    const likes = await likeRepository.updateLike(data, id);
    return likes;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteLike = async (id) => {
  try {
    const likes = await likeRepository.deleteLike(id);
    return likes;
  } catch (err) {
    throw new Error(err);
  }
};

const getLikebyId = async (id) => {
  try {
    const likes = await likeRepository.getLikebyId(id);
    return likes;
  } catch (err) {
    throw new Error(err);
  }
};

const getLikeByUserId = async (userId) => {
  try {
    const likes = await likeRepository.getLikeByUserId(userId);
    return likes;
  } catch (err) {
    throw new Error(err);
  }
};

const getLikeByMovieId = async (movieId) => {
  try {
    const likes = await likeRepository.getLikeByMovieId(movieId);
    return likes;
  } catch (err) {
    throw new Error(err);
  }
};

const getLikeByUserIdAndMovieId = async (userId, movieId) => {
  try {
    const likes = await likeRepository.getLikeByUserIdAndMovieId(
      userId,
      movieId
    );
    return likes;
  } catch (err) {
    throw new Error(err);
  }
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
