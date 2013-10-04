/*
	Used to find the user's lat and long
*/

function getLocation(){
	var location = document.querySelector('#location');
	var	locationDisplay = document.querySelector('#location-display');
    //var phonePos;

	navigator.geolocation.getCurrentPosition(function(position) {
  		locationDisplay.innerHTML = 
  			"<p>Latitude: " + position.coords.latitude + 
  			"</p><p>Longitude: " + position.coords.longitude + "</p>";
           // phonePos = position;
	});

    getJSON();
}

function getJSON() {

    
    //var inputJSON = { "data": { "current_condition": [ {"cloudcover": "0", "humidity": "26", "observation_time": "04:32 PM", "precipMM": "0.0", "pressure": "1017", "temp_C": "18", "temp_F": "64", "visibility": "16", "weatherCode": "113",  "weatherDesc": [ {"value": "Sunny" } ],  "weatherIconUrl": [ {"value": "http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png" } ], "winddir16Point": "N", "winddirDegree": "350", "windspeedKmph": "28", "windspeedMiles": "17" } ],  "request": [ {"query": "Lat 37.79 and Lon -122.39", "type": "LatLon" } ],  "weather": [ {"date": "2013-10-04", "precipMM": "0.0", "tempMaxC": "26", "tempMaxF": "79", "tempMinC": "13", "tempMinF": "55", "weatherCode": "113",  "weatherDesc": [ {"value": "Sunny" } ],  "weatherIconUrl": [ {"value": "http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png" } ], "winddir16Point": "NE", "winddirDegree": "38", "winddirection": "NE", "windspeedKmph": "26", "windspeedMiles": "16" } ] }};
    var inputJSON = { "data": { "current_condition": [ {"cloudcover": "0", "humidity": "26", "observation_time": "04:32 PM", "precipMM": "0.0", "pressure": "1017", "temp_C": "3", "temp_F": "64", "visibility": "16", "weatherCode": "113",  "weatherDesc": [ {"value": "Rainy" } ],  "weatherIconUrl": [ {"value": "http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png" } ], "winddir16Point": "N", "winddirDegree": "350", "windspeedKmph": "28", "windspeedMiles": "17" } ],  "request": [ {"query": "Lat 37.79 and Lon -122.39", "type": "LatLon" } ],  "weather": [ {"date": "2013-10-04", "precipMM": "0.0", "tempMaxC": "26", "tempMaxF": "79", "tempMinC": "13", "tempMinF": "55", "weatherCode": "113",  "weatherDesc": [ {"value": "Sunny" } ],  "weatherIconUrl": [ {"value": "http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png" } ], "winddir16Point": "NE", "winddirDegree": "38", "winddirection": "NE", "windspeedKmph": "26", "windspeedMiles": "16" } ] }};
    

    var weatherArr = new Array();
    weatherArr["Sunny"] = "What a sunny day";
    weatherArr["Rainy"] = "So much rain today";

    var haikuText = weatherArr[inputJSON.data.current_condition[0].weatherDesc[0].value];

    document.querySelector('#haiku1-display').innerHTML = haikuText;

    if (inputJSON.data.current_condition[0].temp_C < 10) {
        //document.querySelector('#haiku2-display').appendChild(document.createElement("br"));
        document.querySelector('#haiku2-display').innerHTML = "It is so bloody freezing!";
    } else {
        
        document.querySelector('#haiku2-display').innerHTML = "It is nice and warm outside!";
    }

    var imgURL = inputJSON.data.current_condition[0].weatherIconUrl[0].value;

    // alert(imgURL);


    if (inputJSON.data.current_condition[0].weatherDesc[0].value == "Sunny") {
        document.querySelector('#weather-img').innerHTML = "<img src=\"images/sunnyWeather.png\">";

    } else {
        document.querySelector('#weather-img').innerHTML = "<img src=\"images/rainyWeather.png\">";
    }

     document.querySelector('#haiku3-display').innerHTML =  "Default line 3 here";



    

    //alert(JSON.stringify(requestURI));

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request
    
/*
    var jsonObj = jQuery.getJSON( inputJSON, function() {
        
        //alert(JSON.stringify(jsonObj));
        //alert(jsonObj.responseJSON.time);
        alert(inputJSON.data.current_condition[0].weatherDesc[0].value);
        alert( "success" );
    })
    // .done(function() {
    //   alert( "second success" );
    //})
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        alert( "complete" );
    });

  //  
   // alert("JSON:")
    //alert();
*/
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
    }

    */