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

//for mocha test
module.exports = function(){
	this.naiveShuffle = naiveShuffle; 
}


// use "node src/inPlaceShufleOfAnArray.js" on command prompt to test


/*var floor = 1;
var ceiling = 10;

console.log(getRandom(floor, ceiling));*/


var theArray = [1,2,3];
console.log("With input ["+theArray+"] Console log shows: ["+naiveShuffle(theArray)+"]");
console.log("With input ["+theArray+"] Console log shows: ["+shuffle(theArray)+"]");



/*
Walk through the array and swap each element with a random other element

However, this approach cannot give us a uniform random distribution.
*/
function naiveShuffle(theArray){

	//for each index in the array
	for(var firstIndex =0; firstIndex< theArray.length; firstIndex++){
		//grab a random other index
		//console.log("the firstIndex is: "+ firstIndex);
		var secondIndex = getRandom(0, theArray.length-1);
		//console.log("the secondIndex is: "+ secondIndex);

		//and swap the values
		if(secondIndex !== firstIndex){
			var temp = theArray[firstIndex];
			theArray[firstIndex] = theArray[secondIndex];
			theArray[secondIndex] = temp;
		}
	}


	return theArray;
}




function getRandom(floor, ceiling){
	return Math.floor(Math.random()* (ceiling-floor +1))+ floor;
}

// We choose a random item to move to the first index, then we choose a random other item to move
// to the second index, etc. We place an item in an index by swapping it with the item currently
// at that index

function shuffle(theArray){

	// if it's 1 or 0 items, just return
	if (theArray.length <= 1) return;

	// walk through from beginning to end
	for(var indexWeAreChoosingFor =0; indexWeAreChoosingFor < theArray.length-1; 
		indexWeAreChoosingFor++){
		//choose a random not-yet-placed item to place there
		// (could also be the item currently in that spot)
		// must be an item AFTER the current item, because the stuff before has all ready been placed

		var randomChoiceIndex = getRandom(indexWeAreChoosingFor, theArray.length-1);

		// place our random choice in the spot by swapping
		if(randomChoiceIndex !== indexWeAreChoosingFor){
			var valueAtIndexWeChoseFor = theArray[indexWeAreChoosingFor];
			theArray[indexWeAreChoosingFor]=theArray[randomChoiceIndex];
			theArray[randomChoiceIndex] = valueAtIndexWeChoseFor;
		}
	}
	return theArray;
}


