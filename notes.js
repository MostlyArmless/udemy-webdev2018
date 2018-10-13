//If-statements are like C-languages, where you need to use brackets to enclose the condition and braces to enclose the "then" actions
if (name === "Billy") {
	alert("Hi Billy.")
}
else if (name === "Susy" || name === "AntiBilly")
{
	alert("Susy you are not Billy.")
}
else {
	alert("You are EXTRA not Billy.")
}

// AND is &&
// OR is ||
// NOT is !
// "Undefined" is the inherent datatype that a variable has when you declare it without assigning a value to it. It's also the default return value of a function which doesn't return a value.
// console.log("Text") will print text to the browser's console window, for debugging. It auto-includes the JS line number where the command was called.
// alert("Uh oh.") brings up a popup box with just OK/Cancel buttons
// prompt("Tell me your name") opens a popup window with a prompt for the user to enter some text. Whatever they type gets auto-converted to a string.

//Function declaration.
function sayHello() {
	console.log("Hello");
}

//Arrays
var list = ["thing1", "thing2", "another more differenter thing."];
//You can store any data in an array, but don't do this unless you absolutely have to because it negatively affects performance.
var mixedList = ["strings", 3, undefined, true, function apple() {console.log("this function doesn't do much")}];
//Nested arrays
var nestedArray = [["a", "b", "c"], ['Thing','stuff','item','object']];
//Remove the first element of a list
list.shift();
//remove the final element of a list
list.pop();
//Add something to the end of the list. It returns the index (zero-based) of where the element ended up.
list.push('new end element')
//Combine lists, return as a new variable. (i.e. concat does not modify in-place)
newList = list.concat(["more stuff", "to put into the array"])
//Sort the list
list.sort();

//Objects
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried = false,
	spells: ["kick ball", "fail to be a real wizard", "Avada Kedavra"]
	shout: function() {
		console.log("AHHHHHH!")
	}
}


//For loops use the same syntax as C++ except the type delcaration is always var
for (var i = 0; i < todosLength; i++){
	//Do Stuff
}

//While loops same
while (condition === true) {
	//Do stuff
}

//For each loops. forEach is a method of the list class
var list = ['array', 'of', 'stuff']
function logListItems(value,index){
	//Do stuff
	console.log(value, index);
}
list.forEach(logListItems())

//Select elements of the DOM for manipulation
var firstListElement = document.querySelector('li')//Selects the FIRST list item it finds
var allListItems = document.querySelectorAll('li')//Selects ALL lists items it finds

//Change styles
allListItems.classList.add('styleClassName') //turn on class membership
allListItems.classList.remove('styleClassName') //turn off class membership
allListItems.classList.toggle("styleClassName") //Turns on and off the class membership of a given element


//PROMISES
/*
A javascript Promise (new in ES6) is an object that may produce a single value some time in the future, either a "resolved" value (accepted) or "rejected" value (failed).

A promise may be in 1 of 3 states: accepted, rejected, or pending.
*/
//eg 1
const promise = new Promise((resolve, reject)) => {
	if (conditionMet) {
		resolve('Stuff Worked')
	}
	else {
		reject('Error, it borked')
	}
}


//eg 2
promise
	.then(result => result + '!')
	.then(result2 => {
		throw Error
		console.log(result2)
	})
	.catch(() => console.log('Error!')) //This catches ANY PRIOR error thrown during the ".then" chain


//eg 3
promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('error!')) //this does NOT catch errors thrown by SUBSEQUENT .then statements
	.then(result3 => {
		throw Error;
		console.log(result3 + '!')
	})

//eg 4: create a bunch of promises which don't fetch any data but for the sake of the example just sit there idling for N ms until they resolve.
const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'A');
}

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'B');
}

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'C');
}

//This means that it will wait for ALL of the promises in the input array of promises to resolve before running the .then() method
Promise.all([promise1, promise2, promise3, promise4])
	.then(values => {
		console.log(values);
	})


//eg 5: real world example of when to use Promises
const urls = [
	'https://jsonplaceholder.typicode.com/users'
	'https://jsonplaceholder.typicode.com/posts'
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {//map the function onto all urls in the array
	return fetch(url.then(resp => resp.json())) //for each url in the array, fetch the url, then convert the response to json.
}))
	.then(results => {//then (once ALL the promises are resolved), log the results
		console.log(results[0])
		console.log(results[1])
		console.log(results[2])
	})


//ASYNC AWAIT
//These are in ES8, they're built on top of Promises
//With promises, we can write this asynchronous code:
movePlayer(100, 'Left')
	.then(() => movePlayer(400, 'Left'))
	.then(() => movePlayer(10, 'Right'))
	.then(() => movePlayer(330, 'Left'))

//The same thing but using async syntax instead:
async funtion playerStart() {
	const firstMove = await movePlayer(100, 'Left'); //pause
	await movePlayer(400, 'Left'); //pause
	await movePlayer(10, 'Right'); //pause
	await movePlayer(330, 'Left'); //pause
}

//The 'await' keyword can be put in front of any function that returns a promise, and it will pause execution until that promise resolves

//Realistic example: fetch() function, used to get stuff from URLs
fetch('https://jsonplaceholder.typicode.com/users')
	.then(resp => resp.json())
	.then(console.log())

//Now, as an async:
async function fetchUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	console.log(data)
}

//One more realistic example: a list of URLs we need to fetch data from all of them.
//The way to do this with raw Promises, as we've seen before is like this:
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]
Promise.all(urls.map( url =>
	fetch(url).then(resp => resp.json())
)).then(array => {
	console.log('users', array[0])
	console.log('posts', array[1])
	console.log('albums', array[2])
}).catch('oops');

//Now, the same thing with async await syntax:
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholdser.typicode.com/albums'
]
const getData = async function () {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map( url => 
			fetch(url).then(resp => resp.json())
		))

		console.log('albums', users)
		console.log('albums', posts)
		console.log('albums', albums)
	}
	catch (err) {
		console.log('oops', err);
	}
}


//BACKEND BASICS
//Node.js will also let us use javascript on a server. express.js is the technology used to make the server