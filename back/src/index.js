const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://root:patomalk33@cluster0-0hwzz.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var cors = require('cors');

app.use(cors({ origin: 'http://localhost:8080' }));

app.use(express.json());

app.use(routes);

app.listen(3333);
