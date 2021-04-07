const express = require("express");
const router = express.Router();
const basicController = require("../controllers/basicController");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, OPTIONS, GET, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization"
  );
  next();
});

// URL : /api/posts
router.get("/posts", (req, res) => {
  basicController.getPosts((err, status, data) => {
    if (err) res.status(status).send({ err, data: null });
    else res.status(status).send({ err: null, data });
  });
});

// URL : /api/post/:id
router.get("/post/:id", (req, res) => {
  basicController.getPost(req.params, (err, status, data) => {
    if (err) res.status(status).send({ err, data: null });
    else res.status(status).send({ err: null, data });
  });
});

// URL : /api/create
router.post("/create", (req, res) => {
  basicController.createPost(req.body, (err, status, data) => {
    if (err) res.status(status).send({ err, data: null });
    else res.status(status).send({ err: null, data });
  });
});

// URL : /api/delete
router.post("/delete/:id", (req, res) => {
  basicController.deletePost(req.params, (err, status, data) => {
    if (err) res.status(status).send({ err, data: null });
    else res.status(status).send({ err: null, data });
  });
});

module.exports = router;
