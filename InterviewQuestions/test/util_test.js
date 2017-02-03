var expect = require('chai').expect;
var SquareArray = require('../src/squareArray.js'); //To load the file to be tested


describe('util tests', function() {
  it('should pass this canary test', function() {
    expect(true).to.eql(true);


  });

  var squareArray;
  
  beforeEach(function(){
  	squareArray = new SquareArray();
  });

  it('sholuld pass if the elements of array are squared', function(){
    var intArray = [0,1,2];
  	
    var result= squareArray.squareArrayInPlace(intArray);

  	expect(result).to.eql(true);
  });


  
});


