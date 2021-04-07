const Post = require("../models/basicSchema");

const getPosts = (callback) => {
  Post.find({}, (err, res) => {
    if (err) return callback(err, 500, null);
    else return callback(null, 200, res);
  });
};

const getPost = ({ id }, callback) => {
  Post.find(
    {
      _id: id,
    },
    (err, res) => {
      if (err) return callback(err, 500, null);
      else return callback(null, 200, res);
    }
  );
};

const createPost = ({ title, body }, callback) => {
  let post = new Post({
    title,
    body,
  });
  post
    .save()
    .then((res) => callback(null, 200, res))
    .catch((err) => callback(err, 500, null));
};

const deletePost = ({ id }, callback) => {
  Post.deleteOne(
    {
      _id: id,
    },
    (err, res) => {
      if (err) return callback(err, 500, null);
      else return callback(null, 200, res);
    }
  );
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  deletePost,
};
