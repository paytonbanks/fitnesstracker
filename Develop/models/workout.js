const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// As a user, I want to be able to view create and track daily workouts. 
// I want to be able to log multiple exercises in a workout on a given day. 
// I should also be able to track the 
// name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, 
// I should be able to track my distance traveled.


const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true,
            },
            name: {
                type: String,
                trim: true,
                required: "What is the name of the exercise?",
            },
            duration: {
                type: Number,
                required: "How long will this cardio sesssio be?",
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            weight: {
                type: Number
            },
            distance: {
                type: Number
            } 
        },    

    ], 

    // date
    // exercises:[name, type, weight, sets, reps, and duration of exercise. ]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;