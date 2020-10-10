const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// As a user, I want to be able to view create and track daily workouts. 
// I want to be able to log multiple exercises in a workout on a given day. 
// I should also be able to track the 
// name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, 
// I should be able to track my distance traveled.


const programSchema = new programSchema({

    // date
    // exercises:[name, type, weight, sets, reps, and duration of exercise. ]

});

const Programs = mongoose.models("Programs", programsSchema);

module.exports = Programs;