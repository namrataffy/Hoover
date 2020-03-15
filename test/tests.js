const { Hoover, findSubArr } = require("../hooverFunctions");

// tests the 0,0 position, checks for initial dirt patch on 0,0
test1();

// test for no dirt patches
test2();

// test for large rectangle and initial dirt patch NOT on 0,0
test3();

// test for starting position outside of rectangle, should fail
test4();

function test1() {
  let finalCoordinates;
  let numberOfDirtCleaned;

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
  // run Hoover movement function, declare answers
  answers = Hoover(dimensions, originalPosition, movements, dirtLocations);
  if (answers) {
    finalCoordinates = answers[0];
    numberOfDirtCleaned = answers[1];
  }

  // check if pass
  if (finalCoordinates == "0 2" && numberOfDirtCleaned == "5") {
    console.log("passed test 1");
  } else {
    console.log("failed test 1");
  }
}

function test2() {
  let finalCoordinates;
  let numberOfDirtCleaned;

  let dimensions = ["10", "10"];
  let originalPosition = ["0", "0"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [];

  // run Hoover movement function, declare answers
  answers = Hoover(dimensions, originalPosition, movements, dirtLocations);
  if (answers) {
    finalCoordinates = answers[0];
    numberOfDirtCleaned = answers[1];
  }

  // check if pass
  if (finalCoordinates == "0 2" && numberOfDirtCleaned == "0") {
    console.log("passed test 2");
  } else {
    console.log("failed test 2");
  }
}

function test3() {
  let finalCoordinates;
  let numberOfDirtCleaned;

  let dimensions = ["100", "10"];
  let originalPosition = ["100", "0"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [["100", "0"]];

  // run Hoover movement function, declare answers
  answers = Hoover(dimensions, originalPosition, movements, dirtLocations);
  if (answers) {
    finalCoordinates = answers[0];
    numberOfDirtCleaned = answers[1];
  }

  // check if pass
  if (finalCoordinates == "100 2" && numberOfDirtCleaned == "1") {
    console.log("passed test 3");
  } else {
    console.log("failed test 3");
  }
}

function test4() {
  let finalCoordinates;
  let numberOfDirtCleaned;

  let dimensions = ["2", "2"];
  let originalPosition = ["100", "0"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [["100", "0"]];

  // run Hoover movement function, declare answers
  answers = Hoover(dimensions, originalPosition, movements, dirtLocations);
  if (answers) {
    finalCoordinates = answers[0];
    numberOfDirtCleaned = answers[1];
  }

  // check if pass
  if (finalCoordinates == "100 2" && numberOfDirtCleaned == "1") {
    console.log("passed test 4");
  } else {
    console.log("failed test 4");
  }
}
