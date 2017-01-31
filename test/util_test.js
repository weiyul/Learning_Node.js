var expect = require('chai').expect;



describe('util tests',function(){
	it('should pass this canary test',function(){
		expect(true).to.eql(true);
	});
});

/*
This is from Test-Driving JavaScript Applications by Venkat Subramaniam
This Canary Test is used to help to quickly verify that the most basic test works, confirming again that the test environments is ok
*/


/*
This is a Mocha test file
By default, Mocha looks for tests in the test directory

The call to require loads up the chai assertion library and brings in a reference to the expect assertion function.
The library file will be loaded from the node_modules directory under our sample project directory

Our test file contains one test suite. A test suite is a cohesive collection of tests that verify the behavior of either one function or a small group of closely related functions.
"describe" is a keyword used by Mocha to define a test suite.
The "describe" function takes two arugments: the test suite name and a function that houses tests in that suite.
We named our example test suite "util tests"

Each test is defined with a call to the "it" function. This, in turn, has two arguments- the name for the test and the actual body of the test.
The name should clearly and concisely express the intention of the test and convey what's expected of the code being tested.

To run the test, type
npm test
*/

/* Mocha reports the canary test as passing. That confirms that both Mocha and Chai are installed properly and working in tandem.
