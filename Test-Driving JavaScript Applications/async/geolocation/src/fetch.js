// From Test-Driving JavaScript Applications by Venkat Subramaniam
// The geolocation API is asynchronous
// The fetchLocation function retrieves the latitude and the longitude values of the current location.

// First, the function merely passes the onError argument 
// to the getCurrentPosition function

// Second, it registers its own callback for the success scenario, 
// processes the response to get the desired values, and sends it to the onSuccess callback.

var fetchLocation = function(onSuccess, onError) {
  var returnLocation = function(position) {
    var location = { 
      lat: position.coords.latitude, lon: position.coords.longitude };

    onSuccess(location);
  };
  
  navigator.geolocation.getCurrentPosition(returnLocation, onError);
};