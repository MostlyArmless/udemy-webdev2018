//Read the color values from the DOM and print them out as text
var h3 = document.querySelector('h3')
//Use getElementById when possible because it's faster to execute than a query
var colorPicker1 = document.getElementById('colorPicker1')
var colorPicker2 = document.getElementById('colorPicker2')
var body = document.getElementById('gradient')
var button1 = document.getElementById('colorButton1')
var button2 = document.getElementById('colorButton2')

function setGradientColors() {
	body.style.background = "linear-gradient(to right, " + colorPicker1.value + ", " + colorPicker2.value + ")"

	h3.textContent = body.style.background;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomizeColor1(event) {
	colorPicker1.value = getRandomColor();
	setGradientColors();
}

function randomizeColor2(event) {
	colorPicker2.value = getRandomColor();
	setGradientColors();
}

//Set initial color of pickers and background
initialColor1 = getRandomColor();
initialColor2 = getRandomColor();
colorPicker1.value = initialColor1;
colorPicker2.value = initialColor2;
setGradientColors();

//Subscribe listeners
colorPicker1.addEventListener("input", setGradientColors)
colorPicker2.addEventListener("input", setGradientColors)
button1.addEventListener("mousedown", randomizeColor1)
button2.addEventListener("mousedown", randomizeColor2)