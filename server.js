const express = require("express");
const express = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extedned: true }));
app.use(express.json());

// Use PUBLIC Folder
app.use(express.static("public"));

// ** Confirm Fucntionality ** \\
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

// Port Listener \\
app.listen(PORT, () => {
    console.log('App running on PORT ${PORT}!');
});
