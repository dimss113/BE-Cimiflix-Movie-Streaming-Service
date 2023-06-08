const commentService = require("../services/commentService");

const getAllComment = async (req, res) => {
  commentService
    .getAllComment()
    .then((comments) => {
      res.json(comments);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const addComment = async (req, res) => {
  commentService
    .addComment(req.body)
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getCommentById = async (req, res) => {
  commentService
    .getCommentById(req.params.id)
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getCommentByUserId = async (req, res) => {
  commentService
    .getCommentByUserId(req.params.userId)
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getCommentByMovieId = async (req, res) => {
  commentService
    .getCommentByMovieId(req.params.movieId)
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getCommentByUserIdAndMovieId = async (req, res) => {
  commentService
    .getCommentByUserIdAndMovieId(req.params.userId, req.params.movieId)
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const updateComment = async (req, res) => {
  commentService
    .updateComment(req.body, req.params.id)
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const deleteComment = async (req, res) => {
  commentService
    .deleteComment(req.params.id)
    .then((comment) => {
      res.json(comment);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
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
