const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/profile', (req, res) => {
	res.send("Getting profile")
});

// If you use Postman to submit a JSON POST request with 'user' and 'hobby' defined, it'll console log those to the node console, and respond with some admittedly unrelated user information below.
app.post('/profile', (req, res) => {
	console.log(req.body);
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
	res.send(user);
});

app.listen(3000);