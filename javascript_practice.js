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

