/* code is from Test-Driving JavaScript Applications */

module.exports = function(word){
	return word.length>0 && word.split('').reverse().join('')===word;
};