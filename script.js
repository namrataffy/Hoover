var fs = require("fs");

// Importing text file as a string
let inputsImported = fs.readFileSync("input.txt", "utf8", (err, data) => {
  if (err) throw err;
});

// Splitting string into easier ot use format
var inputsSplit = inputsImported.split("\n");

// Parsing inputs
let dimensions = inputsSplit[0];
let originalPosition = inputsSplit[1];
let movements = inputsSplit[inputsSplit.length - 1];
let dirtLocations = [];

for (let i = 2; i < inputsSplit.length - 1; i++) {
  dirtLocations.push(inputsSplit[i]);
}

console.log(dimensions);
console.log(originalPosition);
console.log(movements);
console.log(dirtLocations);
