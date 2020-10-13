const app = require("express").Router();
const path = require("path");
// const mongoose = require("mongoose");
// const app = require("./api-routes");


// Missing route direction //
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));

});

app.get("/exercise.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));

});

app.get("/stats.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));

});

// app.get("/public/exercise.html", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/exercise.html"));

// });

module.exports = app;