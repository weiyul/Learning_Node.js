var expect = require('chai').expect;
var SquareArray = require('../src/squareArray.js'); //To load the file to be tested
var ShuffleArrayInPlace = require('../src/inPlaceShufleOfAnArray.js');


describe('util tests', function() {
  it('should pass this canary test', function() {
    expect(true).to.eql(true);


  });

  var squareArray;
  
  beforeEach(function(){
  	squareArray = new SquareArray();
    shuffleArrayInPlace = new ShuffleArrayInPlace();
  });

  it('should pass if the function naiveShuffle() in minimum code can work', function() {
    var result = shuffleArrayInPlace.naiveShuffle();
    expect(result).to.eql(true);
    // body...
  });

  it('sholuld pass if the elements of array are squared by squareArrayInPlace()', function(){
    var intArray = [3,9,10];
  	
    var result= squareArray.squareArrayInPlace(intArray);
    var expectedResult = [9,81,100];
  	expect(result).to.eql(expectedResult);
  });




  it('sholuld pass if the elements of array are squared by squareArrayOutOfPlace()', function(){
    var intArray = [3,9,10];
    
    var result= squareArray.squareArrayOutOfPlace(intArray);
    var expectedResult = [9,81,100];
    expect(result).to.eql(expectedResult);
  });
  
});


