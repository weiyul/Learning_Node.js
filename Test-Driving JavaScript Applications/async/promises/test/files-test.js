var expect = require('chai').expect;
var lineCount = require('../src/files');

describe('test promises', function(){
	/*
	The test creats a checkCount verifier function 
	that asserts that the given count is correct and signals that the test is done.
	Then, the test calls the function under test 
	and regists checkCount as the function to call 
	if the promise returned by linesCount isresolved.

	Run npm test on the command prompt from the promises directory. 
	The test will pass when the Promise created within the linesCount function is resolved 
	and the response arries into the checkCount function.

	If the Promises were instead rejected within the linesCount function, the test would fail.

	It's better for functions to return promises than return callbacks.
	So, we may expect tests for functions that use promises to be better than 
	tests for functions that use callbacks.

	But the previous test does not have anything special when compared to the tests for functions with callbacks.

	*/
	it('should return correct lines count for a valid file', function(done){
		var checkCount = function(count){
			expect(count).to.be.eql(15);
			done();
		};
		lineCount('src/files.js')
		.then(checkCount);
	});

	/* 
	We can make the test more concise and expressive by returning a Promise from the test.
	If a test returns a Promise, the Mocha will wait- at most for the duration of timeout-
	for the Promise to be resolved or rejected before declaring a test done. 
	
	That's a notch better. No done parameter and the function that verifies the result
	is a bit more concise. It is cool that we can return a Promise and Mocha knows what to do with that.
	
	*/
	it('should return correct lines count - using return', function(){
		var callback = function(count){
			expect(count).to.be.eql(15);
		};
		return lineCount('src/files.js')
		.then(callback);
	});
});





