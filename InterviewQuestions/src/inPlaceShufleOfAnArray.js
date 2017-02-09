/* 
* Interview question and solution from Interviewcake.com
* Q35: Write a function for doing an in-place shuffle of an array.

* An in-place algorithm operates directly on its input and changes it, 
* instead of creating and returning a new object. 
* This is sometimes called destructive, 
* since the original input is "destroyed" when it's edited to create the new output.

* The shuffle must be "uniform," meaning each item in the original array must have the same probability
* of ending up in each spot in the final array.

* Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is
* >= floor and <= ceiling.
*/



function getRandom(floor, ceiling){
	return Math.floor(Math.random()* (ceiling-floor +1))+ floor;
}

// use "node inPlaceShufleOfAnArray.js" on command prompt to test
/*
var floor = 1;
var ceiling = 10;

console.log(getRandom(floor, ceiling));
*/