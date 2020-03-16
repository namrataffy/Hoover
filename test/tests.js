const { Hoover, findSubArr } = require("../hooverFunctions");

// tests the 0,0 position, checks for initial dirt patch on 0,0
test1();

// test for no dirt patches
test2();

// test for large rectangle and initial dirt patch NOT on 0,0
test3();

// test for starting position outside of rectangle (X axis)
test4();

// test for standard set of inputs
test5();

// test for moving only into a wall N/E
test6();

// test for moving only into a wall S/W
test7();

// test for starting position outside of rectangle (Y axis)
test8();
// --------------------------------------------------------------------------------------------------------------
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

  // run Hoover movement function, declare answers
  let { finalCoordinates, numberOfDirtCleaned } = Hoover(
    dimensions,
    originalPosition,
    movements,
    dirtLocations
  );

  // check if pass
  if (finalCoordinates == "0 2" && numberOfDirtCleaned == "5") {
    console.log("passed test 1");
  } else {
    console.log(
      "failed test 1, answer should have been 0 2, 5 but received " +
        finalCoordinates +
        ", " +
        numberOfDirtCleaned
    );
  }
}

// --------------------------------------------------------------------------------------------------------------
function test2() {
  let dimensions = ["10", "10"];
  let originalPosition = ["0", "0"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [];

  // run Hoover movement function, declare answers
  let { finalCoordinates, numberOfDirtCleaned } = Hoover(
    dimensions,
    originalPosition,
    movements,
    dirtLocations
  );
  // check if pass
  if (finalCoordinates == "0 2" && numberOfDirtCleaned == "0") {
    console.log("passed test 2");
  } else {
    console.log(
      "failed test 2, answer should have been 0 2, 0 but received " +
        finalCoordinates +
        ", " +
        numberOfDirtCleaned
    );
  }
}

// --------------------------------------------------------------------------------------------------------------
function test3() {
  let dimensions = ["100", "10"];
  let originalPosition = ["100", "0"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [["100", "0"]];

  // run Hoover movement function, declare answers
  let { finalCoordinates, numberOfDirtCleaned } = Hoover(
    dimensions,
    originalPosition,
    movements,
    dirtLocations
  );

  // check if pass
  if (finalCoordinates == "99 2" && numberOfDirtCleaned == "1") {
    console.log("passed test 3");
  } else {
    console.log(
      "failed test 3, answer should have been 99 2, 1 but received " +
        finalCoordinates +
        ", " +
        numberOfDirtCleaned
    );
  }
}

// --------------------------------------------------------------------------------------------------------------
function test4() {
  let dimensions = ["2", "2"];
  let originalPosition = ["100", "0"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [["100", "0"]];

  // run Hoover movement function, declare answers
  try {
    let { finalCoordinates, numberOfDirtCleaned } = Hoover(
      dimensions,
      originalPosition,
      movements,
      dirtLocations
    );
    if (finalCoordinates && numberOfDirtCleaned) {
      console.log("failed test 4, should error out");
    }
  } catch (error) {
    console.error("passed test 4");
  }
}

// --------------------------------------------------------------------------------------------------------------
function test5() {
  let dimensions = ["10", "10"];
  let originalPosition = ["5", "5"];
  let movements = ["N", "S", "E", "W", "S", "W"];
  let dirtLocations = [
    ["5", "5"],
    ["4", "5"],
    ["4", "4"],
    ["1", "3"]
  ];

  // run Hoover movement function, declare answers
  let { finalCoordinates, numberOfDirtCleaned } = Hoover(
    dimensions,
    originalPosition,
    movements,
    dirtLocations
  );

  // check if pass
  if (finalCoordinates == "4 4" && numberOfDirtCleaned == "2") {
    console.log("passed test 5");
  } else {
    console.log(
      "failed test 5, answer should have been 4 4, 2 but received " +
        finalCoordinates +
        ", " +
        numberOfDirtCleaned
    );
  }
}

// --------------------------------------------------------------------------------------------------------------
function test6() {
  let dimensions = ["5", "5"];
  let originalPosition = ["5", "5"];
  let movements = ["N", "E", "E", "N"];
  let dirtLocations = [
    ["5", "5"],
    ["4", "5"],
    ["4", "4"],
    ["1", "3"]
  ];

  // run Hoover movement function, declare answers
  let { finalCoordinates, numberOfDirtCleaned } = Hoover(
    dimensions,
    originalPosition,
    movements,
    dirtLocations
  );
  // check if pass
  if (finalCoordinates == "5 5" && numberOfDirtCleaned == "1") {
    console.log("passed test 6");
  } else {
    console.log(
      "failed test 6, answer should have been 5 5, 1 but received " +
        finalCoordinates +
        ", " +
        numberOfDirtCleaned
    );
  }
}

// --------------------------------------------------------------------------------------------------------------
function test7() {
  let dimensions = ["0", "0"];
  let originalPosition = ["0", "0"];
  let movements = ["S", "W", "W", "S"];
  let dirtLocations = [
    ["5", "5"],
    ["4", "5"],
    ["4", "4"],
    ["1", "3"]
  ];

  // run Hoover movement function, declare answers
  let { finalCoordinates, numberOfDirtCleaned } = Hoover(
    dimensions,
    originalPosition,
    movements,
    dirtLocations
  );

  // check if pass
  if (finalCoordinates == "0 0" && numberOfDirtCleaned == "0") {
    console.log("passed test 7");
  } else {
    console.log(
      "failed test 7, answer should have been 0 0, 0 but received " +
        finalCoordinates +
        ", " +
        numberOfDirtCleaned
    );
  }
}
// --------------------------------------------------------------------------------------------------------------
function test8() {
  let dimensions = ["2", "2"];
  let originalPosition = ["0", "10"];
  let movements = ["N", "N", "E", "N", "S", "W"];
  let dirtLocations = [["100", "0"]];

  // run Hoover movement function, declare answers
  try {
    let { finalCoordinates, numberOfDirtCleaned } = Hoover(
      dimensions,
      originalPosition,
      movements,
      dirtLocations
    );
    if (finalCoordinates && numberOfDirtCleaned) {
      console.log("failed test 8, should error out");
    }
  } catch (error) {
    console.error("passed test 8");
  }
}
