const express = require("express");
const mongoogse = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

// database
mongoogse.connect(
  "mongodb+srv://mechanizzed:mechanizzed@cluster0-ztaou.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

// socket.io middleware
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
app.use(
  "/posts/files",
  express.static(path.resolve(__dirname, "..", "uploads", "posts", "resized"))
);
app.use(require("./routes"));

server.listen(3333);
