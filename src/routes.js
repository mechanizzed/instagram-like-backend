const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostController = require("./controllers/PostController/PostController");
const LikeController = require("./controllers/LikeController/LikeController.js");

const routes = new express.Router();
const upload = multer(uploadConfig);

// Posts
routes.get("/", PostController.index);
routes.post("/post/store", upload.single("image"), PostController.store);

// Like Post
routes.post("/post/:id/like", LikeController.store);

module.exports = routes;
