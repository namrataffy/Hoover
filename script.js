const fs = require("fs");
const { Hoover } = require("./hooverFunction.js");

// Importing text file as a string
const inputsImported = fs.readFileSync("input.txt", "utf8", (err, data) => {
  if (err) throw err;
});

// Splitting string into easier to use format
const inputsSplit = inputsImported.split("\n");

// Parsing inputs
let dimensions = inputsSplit[0].split(" ");
let originalPosition = inputsSplit[1].split(" ");
let movements = inputsSplit[inputsSplit.length - 1].split("");
let dirtLocations = [];

for (let i = 2; i < inputsSplit.length - 1; i++) {
  dirtLocations.push(inputsSplit[i].split(" "));
}

// run Hoover movement function, declare answers
let { finalCoordinates, numberOfDirtCleaned } = Hoover(
  dimensions,
  originalPosition,
  movements,
  dirtLocations
);

// console log answers
console.log(finalCoordinates);
console.log(numberOfDirtCleaned);
