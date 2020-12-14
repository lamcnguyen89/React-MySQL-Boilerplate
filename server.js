const express = require("express");
const path = require("path");
require("dotenv").config();
const config = require("./config/config");
const routes = require("./routes");

const app = express();

// middleware to parse data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
};

// connect to MySQL:
const db = require("./models"); // calls in database 
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });


// use routes
app.use(routes);

// check for "production" enviroment and set port
const PORT = process.env.PORT || 3001;

// start server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})