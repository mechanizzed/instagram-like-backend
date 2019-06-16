const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostController = require("./controllers/PostController/PostController");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post("/post/store", upload.single("image"), PostController.store);

module.exports = routes;
