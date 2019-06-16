const express = require("express");
const mongoogse = require("mongoose");

const app = express();

mongoogse.connect(
  "mongodb+srv://mechanizzed:mechanizzed@cluster0-ztaou.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(require("./routes"));
app.listen(3333);
