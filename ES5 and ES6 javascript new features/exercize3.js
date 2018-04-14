// change everything below to the newer Javascript!
//Use Babel to transpile the ES6 you write to old ES5 to make sure it's syntactically valid:
//https://babeljs.io/

// let + const
const a = 'test';
const b = true;
const c = 789;
let a = test;


// De-structuring
let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;


// Object properties
let a = 'test';
let b = true;
let c = 789;

let okObj = { 
  a,
  b,
  c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer, no?`

// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
s = Symbol("This is my first Symbol")

// Arrow functions
//ES5
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//ES6
whereAmI = (username,location) => {username && location ? "I am not lost" : "I am totally lost!"}