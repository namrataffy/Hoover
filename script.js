var fs = require("fs");

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

// double check with console.log
// console.log(dimensions);
// console.log(originalPosition);
// console.log(movements);
// console.log(dirtLocations);

// Setting up axis
let xAxis = [];
for (let i = 0; i < dimensions[0]; i++) {
  xAxis.push(i + 1);
}

let yAxis = [];
for (let i = 0; i < dimensions[1]; i++) {
  yAxis.push(i + 1);
}

// Position set up
let currentPositionX = parseInt(originalPosition[0]);
let currentPositionY = parseInt(originalPosition[1]);

// Dirt counter set up
let dirtCounter = 0;

// Movements
for (let i = 0; i < movements.length; i++) {
  let dirtFoundIndex;

  switch (movements[i]) {
    case "N":
      if (currentPositionY == dimensions[1]) {
        console.log("dont move N" + i);
      } else {
        currentPositionY++;
      }
      break;
    case "S":
      if (currentPositionY == 0) {
        console.log("dont move S" + i);
      } else {
        currentPositionY--;
      }
      break;
    case "W":
      if (currentPositionX == 0) {
        console.log("dont move W" + i);
      } else {
        currentPositionX--;
      }
      break;
    case "E":
      if (currentPositionX == dimensions[0]) {
        console.log("dont move E" + i);
      } else {
        currentPositionX++;
      }
      break;
  }
  dirtFoundIndex = findSubArr(
    [currentPositionX.toString(), currentPositionY.toString()],
    dirtLocations
  );
  if (dirtFoundIndex !== -1) {
    dirtCounter++;
    dirtLocations.splice(dirtFoundIndex, 1);
  }
}

console.log(currentPositionX);
console.log(currentPositionY);
console.log(dirtCounter);

function findSubArr(subArr, arr) {
  let check = -1;
  for (let i = 0; i < arr.length; i++) {
    if (subArr[0] == arr[i][0] && subArr[1] == arr[i][1]) {
      check = i;
    }
  }
  return check;
}
