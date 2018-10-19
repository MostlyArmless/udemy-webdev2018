const express = require('express');

const app = express();

app.get('/', (req, res) => {
	// Create an object now that we've received a request, and send it as a response
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}

	res.send(user); // Express will automatically JSON.stringify() an object that you pass it.
})
app.listen(3000);