// Main function to run the Hoover
function Hoover(dimensions, originalPosition, movements, dirtLocations) {
  // check if inputs are valid
  // if the initial hoover coordinates are outside the dimensions of room, stop
  if (parseInt(dimensions[0]) < parseInt(originalPosition[0])) {
    return;
  }
  if (parseInt(dimensions[1]) < parseInt(originalPosition[1])) {
    return;
  }

  // Current position set up
  let currentPositionX = parseInt(originalPosition[0]);
  let currentPositionY = parseInt(originalPosition[1]);

  // Dirt counter set up
  let dirtCounter = 0;

  // If there is dirt on starting position, count it
  let dirtFoundIndex = findSubArr(originalPosition, dirtLocations);
  // if dirt patch is found, increment counter and delete dirt patch from array to prevent double counting
  if (dirtFoundIndex !== -1) {
    dirtCounter++;
    dirtLocations.splice(dirtFoundIndex, 1);
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
        if (currentPositionY.toString() !== 0) {
          currentPositionY--;
        }
        break;
      case "W":
        if (currentPositionX.toString() !== 0) {
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
    dirtFoundIndex = findSubArr(
      [currentPositionX.toString(), currentPositionY.toString()],
      dirtLocations
    );
    // if dirt patch is found, increment counter and delete dirt patch from array to prevent double counting dirt patches
    if (dirtFoundIndex !== -1) {
      dirtCounter++;
      dirtLocations.splice(dirtFoundIndex, 1);
    }
  }

  // format answers
  let finalCoordinates = currentPositionX + " " + currentPositionY;
  let numberOfDirtCleaned = dirtCounter.toString();

  return [finalCoordinates, numberOfDirtCleaned];
}

// Function that checks an array for a sub array in the context of this problem (assuming sub array has lenght of 2)
function findSubArr(subArr, arr) {
  let check = -1;
  for (let i = 0; i < arr.length; i++) {
    if (subArr[0] == arr[i][0] && subArr[1] == arr[i][1]) {
      check = i;
    }
  }
  return check;
}

exports.Hoover = Hoover;
exports.findSubArr = findSubArr;
