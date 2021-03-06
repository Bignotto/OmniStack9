const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect(
  "mongodb+srv://damaris:wallgreens@aircnc-avf41.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

console.log('Uploaded files are here: ' + path.resolve(__dirname,'..','uploads'));
app.listen(3333);
