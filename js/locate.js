/*
	Used to find the user's lat and long
*/

function getLocation(){
	var location = document.querySelector('#location');
		locationDisplay = document.querySelector('#location-display');

	navigator.geolocation.getCurrentPosition(function(position) {
  		locationDisplay.innerHTML = 
  			"<p>Latitude: " + position.coords.latitude + 
  			"</p><p>Longitude: " + position.coords.longitude + "</p>";
	});

	
}

/*
var geolocation = document.querySelector("#geolocation"),
        geolocationDisplay = document.querySelector("#geolocation-display");
    if (geolocation && geolocationDisplay) {
        geolocation.onclick = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                geolocationDisplay.innerHTML = "<strong>Latitude:</strong> " + position.coords.latitude + ", <strong>Longitude:</strong> " + position.coords.longitude;
                geolocationDisplay.style.display = "block";
            },
            function (position) {
                geolocationDisplay.innerHTML = "Failed to get your current location";
                geolocationDisplay.style.display = "block";
            });
        };
    }*/