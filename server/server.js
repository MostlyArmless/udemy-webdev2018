const http = require('http');

const server = http.createServer((request, response) => {
	// Note that because we're running this via node.js it's gunna log to the CMD window, not to the browser's console.
	console.log('method', request.method);
	console.log('url', request.url);

	// Send some sample HTML as a response to getting any request.
	response.setHeader('Content-Type', 'text/html');
	response.end('<h1>Hello.</h1>')
})

server.listen(3000);