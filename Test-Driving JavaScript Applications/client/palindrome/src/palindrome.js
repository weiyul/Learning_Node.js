/*
For client side, we do not need modules.exports
*/
var isPalindrome = function(phrase){
	if(phrase === undefined)
		throw new Error('Invalid argument');
	return phrase.trim().length >0 &&
		phrase.split('').reverse().join('') === phrase;
};