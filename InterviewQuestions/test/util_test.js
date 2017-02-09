var expect = require('chai').expect;
var SquareArray = require('../src/squareArray.js'); //To load the file to be tested
var ShuffleArrayInPlace = require('../src/inPlaceShufleOfAnArray.js');
var squareArray, shuffleArrayInPlace;

describe('util tests', function() {

  beforeEach(function(){
    squareArray = new SquareArray();
    shuffleArrayInPlace = new ShuffleArrayInPlace();
  });

  it('should pass this canary test', function() {
    expect(true).to.eql(true);


  });

  it('should pass if the function naiveShuffle() in minimum code can work', function() {
    var theArray = [1,2];
    var result = shuffleArrayInPlace.naiveShuffle(theArray);
    var expectedResult = [1,2];
    //expect(result).to.eql(true);
    expect(result).to.eql(expectedResult);


    
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


