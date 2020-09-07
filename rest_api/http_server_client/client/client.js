var http = require('http');

var options = {
	host: '192.168.9.32',
	port: '8081',
	path: '/index.html'
};

var callback = function(response) {
	var body = '';
	response.on('data', function(data) {
		body += data;
	});

	response.on('end', function() {
		console.log(body);
	});
}

var req = http.request(options, callback);
req.end();
