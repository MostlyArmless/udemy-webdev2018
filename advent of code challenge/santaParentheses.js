// Solving the puzzle from https://adventofcode.com/2015/day/1

const fs = require('fs');

const fileToRead = './testfile.txt';

const goUpChar = '(';
const goDownChar = ')';

// He mentioned in the video that we need to time our code execution using:
console.time('Timer1');
//do stuff
console.timeEnd('Timer1');

// I should probably try to read asynchronously so I can read in parallel with processing the characters.
// Try using streams.