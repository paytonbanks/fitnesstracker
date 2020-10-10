const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev")); 

app.use(express.urlencoded(
    { extedned: true }
));

app.use(express.json());

// Use PUBLIC Folder
app.use(express.static("public"));

// ** Confirm Fucntionality Database Name** \\
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/${PORT}", { 
    useNewUrlParser: true, 
    userFindAndModify: false 
});

// ROUTES ?? //
app.use(require("UNKOWN ROUTE,js")); 

// Port Listener \\
app.listen(PORT, () => {
    console.log('App running on PORT ${PORT}!');
});
