var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var cors = require("cors");
var config = require("./config.js");
var profile = require("./controllers/profileCtrl.js");
var user = require("./controllers/userCtrl.js");

var app = express();

var corsOptions = {
    origin: 'http://localhost:8000'
};

app.use(bodyParser.json(), cors(corsOptions), session({ secret: config.sessionSecret }));

app.post("/api/login", user.login);

app.listen(8000, function(){
	console.log("listening on port 8000");
});