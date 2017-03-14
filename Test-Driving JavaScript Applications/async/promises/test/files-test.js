var expect = require('chai').expect;
var lineCount = require('../src/files');

describe('test promises', function(){
	it('should return correct lines count for a valid file', function(done){
		var checkCount = function(count){
			expect(count).to.be.eql(15);
			done();
		};
		lineCount('src/files.js')
		.then(checkCount);
	});
});

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