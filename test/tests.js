const { Hoover, findSubArr } = require("../hooverFunctions");

// tests the 0,0 position
test1();

function test1() {
  let dimensions = ["10", "10"];
  let originalPosition = ["0", "0"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [
    ["0", "0"],
    ["0", "1"],
    ["0", "2"],
    ["1", "2"],
    ["1", "3"]
  ];

  // run funciton
  [finalCoordinates, numberOfDirtCleaned] = Hoover(
    dimensions,
    originalPosition,
    movements,
    dirtLocations
  );

  // console log answers
  console.log(finalCoordinates);
  console.log(numberOfDirtCleaned);
}
