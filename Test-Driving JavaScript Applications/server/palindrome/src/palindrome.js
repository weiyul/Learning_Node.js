/* code is from Test-Driving JavaScript Applications */

module.exports = function(word){
	return word.split('').reverse().join('')===word;
};