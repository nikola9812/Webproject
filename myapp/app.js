var express = require('express');
var app = express();
var fs = require('fs');
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

app.use(express.static('../'));

app.get('/changeJson', function (req, res) {
	var winnerId = req.query.winnerID;
	var subject = req.query.subject;
	const fs = require('fs');
	const rtPath = '../data/';
	var json = fs.readFileSync(rtPath + subject + '.json', 'utf-8');
	Json = JSON.parse(json);
	//console.log(Json);
	res.send('recieve data');
	for (var i = 0; i < 8; i++) {
		if (Json[i].src == winnerId) {
			Json[i].cnt++;
		}
	}
	var newJson = JSON.stringify(Json);
	fs.unlinkSync(rtPath + subject + '.json');
	fs.writeFileSync(rtPath + subject + '.json', newJson);
});
