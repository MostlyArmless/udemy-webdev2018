const fs = require('fs');

const fileToRead = './hello.txt'

fs.readFile(fileToRead, (err, data) => {
	if (err) {
		console.log('error.');
	}
	console.log('Async - ', data.toString());
})

// readFileSync runs synchronously, i.e. it's a blocking call.
const file = fs.readFileSync('./hello.txt');
console.log('Sync - ', file.toString());


// APPEND
// // Create a file if none exists
// fs.appendFile('./hello.txt', ' This is cool!', err => {
// 	if (err) {
// 		console.log('A great sadness has befallen us.')
// 	}
// })

// WRITE
// // Notice that you don't actually NEED the "./":
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
// 	if (err) {
// 		console.log(err);
// 	}
// })

// DELETE
// fs.unlink('./bye.txt', err=>{
// 	if (err) {
// 		console.log(err);
// 	}

// 	console.log('The specified text file has now been deleted.');
// })