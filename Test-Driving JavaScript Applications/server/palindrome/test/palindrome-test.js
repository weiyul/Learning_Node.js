/* from Test-Driving JavaScript Applications by Venkat Subramaniam*/
var expect = require('chai').expect;
var isPalindrome = require('../src/palindrome');

describe('palindrome-test', function(){
	// Canary Test
	it('should pass this canary test', function(){
		expect(true).to.be.true;
	});

	it('should return true for argument mom', function(){
		expect(isPalindrome('mom')).to.be.true;
	});

	it('should return true for argument dad', function(){
		expect(isPalindrome('dad')).to.be.true;
	});

	it('should return false for argument dude', function(){
		expect(isPalindrome('dude')).to.be.false;
	});

	it('should return true for argument mom mom', function(){
		expect(isPalindrome('mom mom')).to.be.true;
	});

	it('should return false for argument mom dad', function(){
		expect(isPalindrome('mom dad')).to.be.false;
	});

	it('should return false when argument is an empty string', function(){
		expect(isPalindrome('')).to.be.false;
	});

	it('should return false for argument witn only two spaces', function(){
		expect(isPalindrome(' ')).to.be.false;
	});

	/*
	An exception test should pass iff the code fails in the way expected. 
	*/
	it('should throw an exception if argument is missing', function(){
		var call = function(){
		 isPalindrome();
		};
		expect(call).to.throw(Error, 'Invalid argument');
	});


});
