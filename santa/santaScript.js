const testUrl = 'https://adventofcode.com/2015/day/1/input';
const testFile = './santaInstructions.txt';
const fs = require('fs');

console.time('santaStairs')
const santaString = fs.readFileSync(testFile).toString();
let finalFloor = 0;
let hasBeenInBasement = false;
let stepsUntilFirstReachedBasement = 0;

for (var iChar = 0; iChar < santaString.length; iChar++) {
	if (santaString[iChar] === '(') {
		finalFloor += 1;
	}
	else if (santaString[iChar] === ')') {
		finalFloor -= 1;
	}

	if (finalFloor < 0 && !hasBeenInBasement) {
		stepsUntilFirstReachedBasement = iChar;
		hasBeenInBasement = true;
	}
}
console.timeEnd('santaStairs')
console.log('Santa ends up on floor', finalFloor, "and he first reached the basement after", stepsUntilFirstReachedBasement, "steps.");