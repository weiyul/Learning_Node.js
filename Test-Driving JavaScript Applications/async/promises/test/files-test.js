require('chai').use(require('chai-as-promised')); 
//the use function extends the Chai functions with an eventually property.

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

	/*
	Using Chai-as-promised
	Instead of returning the Promise object returned by the function under test,
	the test can assert that the function nuder test eventually completes with the expected
	response. To achieved this we will use the chai-as-promised library that was created exclusively
	for testing promises.

	The library chai-as-promised extends the fluent API of Chai with functions to verify promises'
	responses. 

	The eventually property tactfully makes the test concise and more expressive. 
	The eventually bundles a Promise that will be resolved if the expression in the expect 
	satisflies the value in the eql. Otherwise, the Promise will be rejected, resulting in the 
	failure of the test.
	*/
	it('should return correct lines count - using eventually', function(){
		return expect(lineCount('src/files.js')).to.eventually.eql(15);
	});

	/*
	Mixing eventually and done()

	Returning a Promise from a test is a good approach, but not all testing tools 
	offer that capability. If you're using a testing tool that's unaware of promises
	or if you simply prefer not to return a Promise, you may combine eventually and
	the done parameter to test functions that return promises.
	*/
	it('should return correct lines count - using no return', function(done){
		expect(lineCount('src/files.js')).to.eventually.eql(15).notify(done);
	});

});





