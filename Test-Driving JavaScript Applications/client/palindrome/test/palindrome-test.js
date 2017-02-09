/*
There is no require at the top of the file to bring in the isPalindrome function into scope. 
Karma and the browser will collaborate to take care of bringing that on board
*/

describe('palindrome-test', function(){
	it('should pass this canary test', function(){
		expect(true).to.be.true;
	});

	it('should return true for arguement mom', function(){
		expect(isPalindrome('mom')).to.be.true;
	});

	it('should return true for arguement dad', function() {
		expect(isPalindrome('dad')).to.be.true;
	});

	it('should return false for arguement dude', function(){
		expect(isPalindrome('dude')).to.be.false;
	});

	it('should return true for arguement mom mom', function(){
		expect(isPalindrome('mom mom')).to.be.true;
	});

	it('should return false for arguement mom dad', function(){
		expect(isPalindrome('mom dad')).to.be.false;
	})

	it('should return false when arguement is an empty string', function(){
		expect(isPalindrome('')).to.be.false;
	});

	it('should return false for argument with only two spaces', function(){
		expect(isPalindrome('  ')).to.be.false;
	});

	it('should throw an exception if arguement is missing', function(){
		var call = function(){isPalindrome();};
		expect(call).to.throw(Error, 'Invalid argument');
	});
});