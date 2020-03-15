var fs = require("fs");
const { Hoover, findSubArr } = require("./hooverFunctions.js");

// Importing text file as a string
let inputsImported = fs.readFileSync("input.txt", "utf8", (err, data) => {
  if (err) throw err;
});

// Splitting string into easier ot use format
var inputsSplit = inputsImported.split("\n");

// Parsing inputs
let dimensions = inputsSplit[0].split(" ");
let originalPosition = inputsSplit[1].split(" ");
let movements = inputsSplit[inputsSplit.length - 1].split("");
let dirtLocations = [];

for (let i = 2; i < inputsSplit.length - 1; i++) {
  dirtLocations.push(inputsSplit[i].split(" "));
}

// run Hoover movement function, declare answers
answers = Hoover(dimensions, originalPosition, movements, dirtLocations);
if (answers) {
  let finalCoordinates = answers[0];
  let numberOfDirtCleaned = answers[1];

  // console log answers
  console.log(finalCoordinates);
  console.log(numberOfDirtCleaned);
} else {
  // this is the case where no answers were return, meaning there was an error in the inputs
  console.log(
    "Invalid inputs, check to make sure initial position of Hoover is inside the defined room dimensions"
  );
}
