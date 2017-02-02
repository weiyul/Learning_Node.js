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

});
