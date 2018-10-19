const express = require('express');

const app = express();

// Routing get requests

app.get('/profile', (req, res) => {
	res.send("Getting profile")
});

app.get('/', (req, res) => {
	res.send("Getting root")
});

app.listen(3000);