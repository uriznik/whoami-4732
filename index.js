var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
	var who = {
		ipaddress: req.headers["x-forwarded-for"] || req.ip,
		language: req.headers["accept-language"],
		software: req.headers["user-agent"]
	}
	res.send(who);
});

app.listen(port);
