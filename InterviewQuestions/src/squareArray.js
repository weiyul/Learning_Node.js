/* from interviewCake.com */

/* Here are two functions that do the same operation, except one is in-place and the other is out-of-place*/
module.exports = function (){
	this.squareArrayInPlace = function (intArray){

	intArray.forEach(function(currentValue, index){
		intArray[index] *= currentValue; 

	});	
	
	return intArray;
	};
};

