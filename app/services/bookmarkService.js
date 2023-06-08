const bookmarkRepository = require("../repositories/bookmarkRepository");

const getAllBookmark = async () => {
  try {
    const bookmarks = await bookmarkRepository.getAllBookmark();
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const addBookmark = async (data) => {
  try {
    const bookmarks = await bookmarkRepository.addBookmark(data);
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const getBookmarkById = async (id) => {
  try {
    const bookmarks = await bookmarkRepository.getBookmarkById(id);
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const getBookmarkByUserId = async (userId) => {
  try {
    const bookmarks = await bookmarkRepository.getBookmarkByUserId(userId);
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const getBookmarkByMovieId = async (movieId) => {
  try {
    const bookmarks = await bookmarkRepository.getBookmarkByMovieId(movieId);
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const getBookmarkByUserIdAndMovieId = async (userId, movieId) => {
  try {
    const bookmarks = await bookmarkRepository.getBookmarkByUserIdAndMovieId(
      userId,
      movieId
    );
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const updateBookmark = async (data, id) => {
  try {
    const bookmarks = await bookmarkRepository.updateBookmark(data, id);
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const deleteBookmark = async (id) => {
  try {
    const bookmarks = await bookmarkRepository.deleteBookmark(id);
    return bookmarks;
  } catch (error) {
    throw error;
  }
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
