# Hoover

<br>

# Summary

This is an app that navigates an imaginary robotic Hoover through room, picking up "dirt" from the floor. The room dimensions, Hoover initial position, locations of dirt patches, and movement directions are taken as inputs from a ".txt" file. The final position of the Hoover as well as number of dirt patches collected will be output in the command line via console log.

<br>

# Example

Input:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

</br>
Output:

```
1 3
1
```

# Technologies

- VScode
- Git
- GitHub
- Node.js

# Author

Arman Riahi

# Links

[LinkedIn](https://www.linkedin.com/in/arman-riahi/)
<br>

[GitHub](https://github.com/namrataffy)
<br>

# Code Snippet

Code showing how Hoover deals with finding a patch of dirt:

```

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

```

```

```
