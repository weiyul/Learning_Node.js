// From interviewcake.com
// What I did is test the solution using node.js

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

Breakdown

To start, try writing an example value for stockPricesYesterday and finding the maximum profit
"by hand". What's your process for figuring out the maximum profit?

The brute force approach would be to try every pair of times (treating the earlier time as buy 
time and the later time as the sell time) and see which one is higher.
*/

var stockPricesYesterday =[7, 0, 1, 2, 6, 8];
//console.log(stockPricesYesterday);
console.log("the maximum profit is " + getMaxProfit(stockPricesYesterday));

function getMaxProfit(stockPricesYesterday){

	var maxProfit =0;

	// go through every time
	for(var outerTime =0; outerTime < stockPricesYesterday.length; outerTime++){
		for(var innerTime=0; innerTime <stockPricesYesterday.length; innerTime++){
			// for every time, got through every OTHER times
			var earlierTime = Math.min(outerTime, innerTime);
			var laterTime = Math.max(outerTime, innerTime);

			// and use those to find the earlier and alter prices
			var earlierPrice = stockPricesYesterday[earlierTime];
			var laterPrice = stockPricesYesterday[laterTime];

			// see what our profit would be if we bought at the
			// min price an dsold at the current price
			var potentialProfit = laterPrice - earlierPrice;

			// update maxProfit if we can do better
			maxProfit = Math.max(maxProfit, potentialProfit);
		}		
	}
	return maxProfit;
}