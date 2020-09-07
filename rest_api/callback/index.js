var fs = require('fs');

fs.readFileSync('input.txt', function (err, data) {
	if (err)
		return console.error(err);
	console.log(data.toString());
});

var text = fs.readFileSync('input.txt');
console.log(text.toString())


console.log('Program has ended');
