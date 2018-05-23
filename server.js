var express = require("express");
var app = express();
var port = 8080;

//router
var router = require("./app/routes.js");
app.use("/", router);

//static files
app.use(express.static(__dirname + "/public"));

//start server
app.listen(port, function() {
 console.log("node app started");
});
