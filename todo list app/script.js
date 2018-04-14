var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll('li');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button")
	deleteButton.appendChild(document.createTextNode('x'))
	li.appendChild(document.createTextNode(input.value + ' '));
	li.appendChild(deleteButton)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	// if (event.target.)
	event.target.classList.toggle('done');
}

var latestEvent;

function deleteTask(event) {
	console.log(event.target.className)
	if (event.target.classList.contains("deleteTaskButton")) {
		event.target.parentElement.remove();
	}
}

//Using the "mousedown" trigger instead of "click", since "click" refers to a full down-up click cycle. If we use "click", and a person clicks-and-drags across list items, all the items they dragged across will get the event triggered on them.
button.addEventListener("mousedown", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("mousedown", toggleDone)

ul.addEventListener("mousedown", deleteTask)