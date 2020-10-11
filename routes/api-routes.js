const Workout = require("../models/workout.js");
const app = require("express").Router();

app.get("/api/workouts", (req, res) => {
    Workout.find().then((dbWorkout) => {
        res.json(dbWorkout);
        }).catch((err) => {
        res.json(err);
        });
});

app.post("/api/workouts", ({body}, res) => {
    Workout.create(body).then((dbWorkout) => {
        res.json(dbWorkout);
        }).catch((err) => {
        res.status(400).json(err);
        });
});




module.exports = app;
