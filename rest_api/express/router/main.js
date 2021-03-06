module.exports = function(app, fs) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: "MY HOMEPAGE",
			length: 5
		});
	});

	app.get('/users', function(req, res) {
		console.log('GET /list');
		fs.readFile(__dirname + '/../data/user.json', 'utf8', function(err, data) {
			console.log(data);
			res.end(data);
		});
	});

	app.get('/users/:username', function(req, res) {
		fs.readFile(__dirname + '/../data/user.json', 'utf8', function(err, data) {
			var users = JSON.parse(data);
			res.json(users[req.params.username]);
		});
	});

	app.post('/users/:username', function(req, res) {
		var result = {};
		var username = req.params.username;

		if (!req.body["password"] || !req.body["name"]) {
			result["success"] = 0;
			result["error"] = "invalid request";
			res.json(result);
			return;
		}

		fs.readFile(__dirname + '/../data/user.json', 'utf8', function(err, data) {
			var users = JSON.parse(data);
			if (users[username]) {
				result["success"] = 0;
				result["error"] = "duplicate";
				res.json(result);
				return;
			}
			users[username] = req.body;
			fs.writeFile(__dirname + '/../data/user.json',
					JSON.stringify(users, null, '\t'), 'utf8', function(err, data) {
				result = {"success": 1};
				res.json(result);
			});
		});
	});

	app.delete('/users/:username', function(req, res) {
		var result = {};
		var username = req.params.username;

		fs.readFile(__dirname + '/../data/user.json', 'utf8', function(err, data) {
			var users = JSON.parse(data);
			if (!users[username]) {
				result["success"] = 0;
				result["error"] = "not found";
				res.json(result);
				return;
				
			} else {
				console.log('delete', username);
				delete users[username];

				fs.writeFile(__dirname + '/../data/user.json',
						JSON.stringify(users, null, '\t'), 'utf8', function(err, data) {
					result = {"success": 1};
					res.json(result);
					return;
				});
			}
		});
	});
}
