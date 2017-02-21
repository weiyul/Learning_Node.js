/*
Code is from Test-Driving JavaScript Applications by Venkat Subramaniam
*/

var expect = require('chai').expect;
var linesCount = require('../src/files');

// Tests written using Mocha can include a parameter that can be used to signal the actual completion of test.
// If a parameter is present, Mocha does not assume a test is done when it completes the test function. Instead, it waits for a signal through that parameter to declare that the test is done.
//the parameter, done, is a way to signarl to Mocha when a test is really complete
describe('test server-side callback', function(){
	it('should return correct lines count for a valid file', function(done){
		var callback = function(count){
			expect(count).to.be.eql(18);
			done();//to ensure done is called
		};
		linesCount('src/files.js', callback);
	});

	// A Negative Asynchronous Test
	it('should report error for an invalid file name', function(done){
		var onError = function(error){
			expect(error).to.be.eql('unable to open file src/flies.js');
			done();
		};
		
		linesCount('src/flies.js', undefined, onError);//send invalid file name 'flies' instead of files
		// The second argument to the function is undefined since it will not be used during this call.
	});
});

