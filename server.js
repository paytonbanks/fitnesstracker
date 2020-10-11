const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000
const app = express();

app.use(logger("dev")); 
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extedned: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

// app.use(require("./routes/api-routes")); 
app.use(require("./routes/html"));

app.listen(PORT, () => {
    console.log(`App running on  ${PORT}!`);
});
