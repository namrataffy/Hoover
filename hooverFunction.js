// --------------------------------------------------------------------------------------------------------------
// Main function to run the Hoover
function Hoover(dimensions, originalPosition, movements, dirtLocations) {
  // Creating object with keys of dirt locations for efficient look up as Hoover moves
  // This way the dirt array is only looped through once
  let dirtLocationsObj = {};
  for (let i = 0; i < dirtLocations.length; i++) {
    dirtLocationsObj[dirtLocations[i]] = true;
  }

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

  // If there is dirt on starting position, count it, delete dirt patch from object
  if (
    dirtLocationsObj[originalPosition[0] + "," + originalPosition[1]] == true
  ) {
    dirtCounter++;
    delete dirtLocationsObj[currentPositionX + "," + currentPositionY];
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

    // If there is dirt on the current position, count it, delete dirt patch from object
    if (dirtLocationsObj[currentPositionX + "," + currentPositionY] == true) {
      dirtCounter++;
      delete dirtLocationsObj[currentPositionX + "," + currentPositionY];
    }
  }

  // return answers in proper format as requested
  return {
    finalCoordinates: currentPositionX + " " + currentPositionY,
    numberOfDirtCleaned: dirtCounter.toString()
  };
}
// --------------------------------------------------------------------------------------------------------------
exports.Hoover = Hoover;
