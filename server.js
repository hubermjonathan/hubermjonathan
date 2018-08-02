var express = require("express");
var app = express();
var port = 8080;

//router
var router = express.Router();
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.use("/", router);

//static files
app.use(express.static(__dirname + "/public"));

//start server
app.listen(port, function() {
 console.log("running on localhost:" + port);
});
