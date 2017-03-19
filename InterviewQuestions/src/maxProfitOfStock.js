// From https://www.interviewcake.com/question/javascript/stock-price
// What I did is test the solution using node.js and chai
// I also add an extra codes to verify not sell at the same time, which does not exist in the original code

/*
Q1: Suppose we could access yesterday's stock prices as an array, where:
. The values are the price in dollars of Apple stock.
. A higher index indicates a later time.

So if the stock cost $500 at 10:30 am and $550 at 11:00 am, then:

stockPricesYesterday[60] =500;

Write an efficient function that takes stockPricesYesterday and return the best 
profit I could have made from 1 purchase and 1 sale of a Apple stock yesterday.

No "shorting" - you must buy before you sell. You may not buy and sell in the same time 
step (at least 1 minute must pass)

*/


/* Solution:
Gotchas

It is not sufficient to simply take the difference between the highest price and the lowest
price, because the highest price may come before the lowest price. You must buy before you sell.
What if the stock value goes down all day? In that case, the best profit will be negative.

You can do this in O(n) time and O(1) space!

*/



module.exports = function(){

	this.getMaxProfit = getMaxProfit;
}




var stockPricesYesterday =[7, 0, 1, 2, 6, 8];
//console.log(stockPricesYesterday);
console.log("the maximum profit is " 
	+ getMaxProfit(stockPricesYesterday)
	+" for ["+stockPricesYesterday+"]");

var stockPricesYesterday2 =[8,7,6,5,4,3,2,1];
console.log("the maximum profit is " 
	+ getMaxProfit(stockPricesYesterday2)
	+ " for ["
	+stockPricesYesterday2+"]");

//var stockPricesYesterday3 =[1];
//console.log("Only one stock-price "+ getMaxProfit(stockPricesYesterday3) ); //will get Error

function getMaxProfit(stockPricesYesterday){
	// If stockPricesYesterday has fewer than 2 prices
	if(stockPricesYesterday.length <2){
		throw new Error('Getting a profit requires at least 2 prices');
	}

	var minPrice = stockPricesYesterday[0];
	var maxProfit = stockPricesYesterday[1]-stockPricesYesterday[0];

	// go through every time
	for(var i =1; i < stockPricesYesterday.length; i++){
		var currentPrice = stockPricesYesterday[i];
		// ensure minPrice is the lowest price we've seen so far
		minPrice = Math.min(minPrice, currentPrice);

		//make sure the buy and sell are not at the same time
		if(minPrice != currentPrice){

		// see what our profit would be if we bought at the
		// min price and sold at the current price
			var potentialProfit = currentPrice - minPrice;
			// update maxProfit if we can do better
			maxProfit = Math.max(maxProfit, potentialProfit);
		} 

		

		
				
	}
	return maxProfit;
}

