var locate = function() {  
/* 
call the navigator.geolocation.getCurrentPosition function,
get the latitude and longitude values from the position, create a URL
for Google maps, and set window.location to that URL. If the call to get the geolocation 
fails, set an error message in the error DOM element.
*/
navigator.geolocation.getCurrentPosition(
	function(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var url='http://maps.google.com/?q='+ latitude+','+longitude;
		window.location = url;
	},
	function(){
		document.getElementById('error').innerHTML = 'unable to get your location';
	});

};

/*
The spiking sesson gives us some helpful insights:
1. getCurrentPosition is an asyncronous function. We need to register two event 
handlers with it- one for success and one for failure.

2. When an error is received, we have to navigate the DOM to get the div 
element to set the error details.

3. Given a position we need to extract the latitude and longitude values from it to create
the URL for Google maps.

4. Setting the location property, which is an implicit variable in the ubiquitous 
window object, causes the browser to change location.

5. The code is one bowl of spaghetti- we need to create a modular design for automated testing.

Remember, testability is a design issue-poorly designed code is hard to test.
The first step to tackle dependency in a piece of code should be to remove it, 
if at all possible. If a dependency in a function is intrinsic, then loosely couple
the code to what it relies on, by passing in or injecting the dependency. Then, 
instead of using a real object or function, you can replace it with test doules
and test for interactions. 
*/