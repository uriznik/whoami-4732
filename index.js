var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
	var who = {
		ipaddress: req.ip,
	}
	res.send(req.headers);
});

app.listen(port);
