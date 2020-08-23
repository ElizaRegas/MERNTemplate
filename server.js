// requires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
// const mongoose = require("mongoose");
// const routes = require("./routes");

// definitions
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
// app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");

// start the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
