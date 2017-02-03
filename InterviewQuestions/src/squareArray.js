/* from interviewCake.com */

/* Here are two functions that do the same operation, except one is in-place and the other is out-of-place*/
module.exports = function (){
	
	//return the input array after each element is squared
	this.squareArrayInPlace = function (intArray){

		intArray.forEach(function(currentValue, index){
		intArray[index] *= currentValue; 

		});	
	
		return intArray;
	};

	//return a newly created array after each element of an input array is squared
	this.squareArrayOutOfPlace = function(intArray){
		var squareArray = [];
		intArray.forEach(function(currentValue, index){
			squareArray[index] = Math.pow(currentValue,2);
		});

		return squareArray;

	};
};

