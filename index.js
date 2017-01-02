var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var uaSoftware = /^[^\s]*\s\(([^)]*)\)/;

app.get('/', function (req, res) {
	var language = req.headers["accept-language"];
	var ua = req.headers["user-agent"];

	if (language && language.indexOf(',') > 0) {
		language = language.split(',')[0];
	}
	
	if (ua) {
		var match = uaSoftware.exec(ua);
		var software = match ? match[1] : "";
	}
	var who = {
		ipaddress: req.headers["x-forwarded-for"] || req.ip,
		language: language,
		software: software
	}

	res.send(who);
});

app.listen(port);
