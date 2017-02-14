/*
Code is from Test-Driving JavaScript Applications by Venkat Subramaniam
*/

var expect = require('chai').expect;
var linesCount = require('../src/files');

describe('test server-side callback', function(){
	it('should return correct lines count for a valid file', function(){
		//Good try, but this will not actually work, since line's count cannot be negative, but after npm test, the test is passed
		var callback = function(count){
			expect(count).to.be.eql(-2319);
		};
		linesCount('src/files.js', callback);
	});
});