/*
The name of the test suite tells us that our focus will be only on the createURL function 
in the tests in this suite. The test calls the function under test with alid latitude and
longitude values and verifies that URL returned is what Google maps would be happy to accept.
*/

describe('create-url test', function(){
	it('should return proper url given at lat and lon', function(){
		var latitude = -33.857;
		var longitude = 151.215;
		var url = createURL(latitude, longitude);
		expect(url).to.be.eql('http://maps.google.com?q=-33.857,151.215');
	});

	it('should return proper url given another lat and lon', function(){
		var latitude = 37.826;
		var longitude = -122.423;
		var url = createURL(latitude, longitude);
		expect(url).to.be.eql('http://maps.google.com?q=37.826,-122.423');
	});

	it('should return empty string if latitude is undefined', function(){
		var latitude = undefined;
		var longitude = -122.423;
		var url = createURL(latitude, longitude);
		expect(url).to.be.eql('');
	});
});