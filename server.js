const bodyparser = require("body-parser");
const mongoose   = require("mongoose");
const express    = require("express");
const index      = require("./routes/index");
const weight     = require("./routes/weight");


// create application
const app = express();


// create database
mongoose.connect("mongodb://admin:password@ds153732.mlab.com:53732/node-server");


// app settings
app.set("json spaces", 4);
app.set("views", "./views");
app.set("view engine", "pug");


// middleware
let bp_json = bodyparser.json();
let bp_urlencoded = bodyparser.urlencoded( {extended: true} );
app.use(bp_json);
app.use(bp_urlencoded);


// index routes
app.use("/", index);

// weight routes
app.use("/api/weight", weight);


// start application
const port = 3000;
app.listen(port, function() {
    console.log("Server listening on port %s.", port);
});
