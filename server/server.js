const http = require('http');

const server = http.createServer((request, response) => {
	// Note that because we're running this via node.js it's gunna log to the CMD window, not to the browser's console.
	console.log('method', request.method);
	console.log('url', request.url);

	// Create a JS object which we then convert to JSON and use to respond to the request with.
	const user = {
		name: 'John',
		hobby: 'Skating'
	}

	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(user))
})

server.listen(3000);