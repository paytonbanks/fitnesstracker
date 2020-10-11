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

// Mongoose Connection\\
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/blooming-taiga-25164", 
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
);

// ROUTES ?? //
app.use(require("./Develop/routes/apiRoutes.js")); 
app.use(require("./Develop/routes/pages.js"));

// Port Listener \\
app.listen(PORT, () => {
    console.log('App running on PORT ${???}');
});
