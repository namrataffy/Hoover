// --------------------------------------------------------------------------------------------------------------
// This is an old version of the hoover function that works by deleteing dirt patches from the array of dirt
// More efficient method was created in root directory utilizing object

// --------------------------------------------------------------------------------------------------------------
// Main function to run the Hoover
function Hoover(dimensions, originalPosition, movements, dirtLocations) {
  // make copy of array as to not alter input directly (later on)
  let dirtLocationsArr = [...dirtLocations];

  // check if inputs are valid
  // if the initial hoover coordinates are outside the dimensions of room, stop
  if (parseInt(dimensions[0]) < parseInt(originalPosition[0])) {
    throw new Error("Hoover X coordinate outside of bound of room");
  }
  if (parseInt(dimensions[1]) < parseInt(originalPosition[1])) {
    throw new Error("Hoover Y coordinate outside of bound of room");
  }

  // Current position set up
  let currentPositionX = parseInt(originalPosition[0]);
  let currentPositionY = parseInt(originalPosition[1]);

  // Dirt counter set up
  let dirtCounter = 0;

  // If there is dirt on starting position, count it
  let dirtFoundIndex = findDirtIndex(originalPosition, dirtLocationsArr);
  // if dirt patch is found, increment counter and delete dirt patch from array to prevent double counting
  if (dirtFoundIndex !== -1) {
    dirtCounter++;
    dirtLocationsArr.splice(dirtFoundIndex, 1);
  }

  // Executing Movements (N,S,E,W)
  for (let i = 0; i < movements.length; i++) {
    // create dirt found index
    let dirtFoundIndex;

    // switch cases for various movements
    // if the hoover is already at the wall, don't move. If not, move by incrementing current position
    switch (movements[i]) {
      case "N":
        if (currentPositionY.toString() !== dimensions[1]) {
          currentPositionY++;
        }
        break;
      case "S":
        if (currentPositionY !== 0) {
          currentPositionY--;
        }
        break;
      case "W":
        if (currentPositionX !== 0) {
          currentPositionX--;
        }
        break;
      case "E":
        if (currentPositionX.toString() !== dimensions[0]) {
          currentPositionX++;
        }
        break;
    }
    // assign dirt index (it is -1 if not found)
    dirtFoundIndex = findDirtIndex(
      [currentPositionX.toString(), currentPositionY.toString()],
      dirtLocationsArr
    );
    // if dirt patch is found, increment counter and delete dirt patch from array to prevent double counting dirt patches
    if (dirtFoundIndex !== -1) {
      dirtCounter++;
      dirtLocationsArr.splice(dirtFoundIndex, 1);
    }
  }

  // return answers in proper format as requested
  return {
    finalCoordinates: currentPositionX + " " + currentPositionY,
    numberOfDirtCleaned: dirtCounter.toString()
  };
}

// --------------------------------------------------------------------------------------------------------------
// Function that checks an array for a sub array in the context of this problem (assuming sub array has length of 2)
function findDirtIndex(subArr, arr) {
  let check = -1;
  for (let i = 0; i < arr.length; i++) {
    if (subArr[0] == arr[i][0] && subArr[1] == arr[i][1]) {
      check = i;
    }
  }
  return check;
}

// --------------------------------------------------------------------------------------------------------------
exports.Hoover = Hoover;
exports.findDirtIndex = findDirtIndex;
