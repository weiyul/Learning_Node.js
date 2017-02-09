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
});