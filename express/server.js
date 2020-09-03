var express = require('express');
var app = express();
var router = require('./router/main')(app);

var port = 8081

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(port, function() {
	app.use(express.static('public'));
	console.log('Express server has started on port', port);
});

