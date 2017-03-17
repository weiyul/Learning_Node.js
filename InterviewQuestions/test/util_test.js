var expect = require('chai').expect;
var SquareArray = require('../src/squareArray.js'); //To load the file to be tested
var ShuffleArrayInPlace = require('../src/inPlaceShufleOfAnArray.js');
var MaxProfitOfStock= require('../src/maxProfitOfStock.js');
var squareArray, shuffleArrayInPlace, maxProfitOfStock;

describe('util tests', function() {

  beforeEach(function(){
    squareArray = new SquareArray();
    shuffleArrayInPlace = new ShuffleArrayInPlace();
    maxProfitOfStock = new MaxProfitOfStock();
  });

  it('should pass if the function getMaxProfit works', function(){
    var stockPricesYesterday =[7, 0, 1, 2, 6, 8];
    var result = maxProfitOfStock.getMaxProfit(stockPricesYesterday);
    expect(result).to.eql(8);
  });

  it('should pass this canary test', function() {
    expect(true).to.eql(true);


  });
  it('should pass when stock decreases everydayd and the profit is -1', function(){
    var stockPricesYesterday = [8,7,6,5,4,3,2,1];
    var result = maxProfitOfStock.getMaxProfit(stockPricesYesterday);
    expect(result).to.eql(-1);

  });

  it('should pass if the function naiveShuffle() in minimum code can work', function() {
    var theArray = [1];
    var result = shuffleArrayInPlace.naiveShuffle(theArray);
    var expectedResult = [1];
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


