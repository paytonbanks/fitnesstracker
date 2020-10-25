const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now
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
                required: "How long will this cardio sesssion be?",
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
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;