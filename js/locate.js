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

    // var requestURI = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=" + phonePos.coords.latitude + "+" + phonePos.coords.longitude +"&format=json&num_of_days=1&key=sk635zud4bwuzmnzvhd4d4sg";
    //var requestURI = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=37.78937" +  "+-122.38912&format=json&num_of_days=1&key=sk635zud4bwuzmnzvhd4d4sg";
    // var requestURI = "http://ip.jsontest.com/";
    //var requestURI = "/local.json";
    //var requestURI = "http://date.jsontest.com/";
    //alert(requestURI);
    var inputJSON = { "data": { "current_condition": [ {"cloudcover": "0", "humidity": "26", "observation_time": "04:32 PM", "precipMM": "0.0", "pressure": "1017", "temp_C": "18", "temp_F": "64", "visibility": "16", "weatherCode": "113",  "weatherDesc": [ {"value": "Sunny" } ],  "weatherIconUrl": [ {"value": "http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png" } ], "winddir16Point": "N", "winddirDegree": "350", "windspeedKmph": "28", "windspeedMiles": "17" } ],  "request": [ {"query": "Lat 37.79 and Lon -122.39", "type": "LatLon" } ],  "weather": [ {"date": "2013-10-04", "precipMM": "0.0", "tempMaxC": "26", "tempMaxF": "79", "tempMinC": "13", "tempMinF": "55", "weatherCode": "113",  "weatherDesc": [ {"value": "Sunny" } ],  "weatherIconUrl": [ {"value": "http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png" } ], "winddir16Point": "NE", "winddirDegree": "38", "winddirection": "NE", "windspeedKmph": "26", "windspeedMiles": "16" } ] }};
    //alert(inputJSON.data.current_condition[0].weatherDesc[0].value);
    //alert(inputJSON.data.current_condition[0].temp_C);

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

    document.querySelector('#weather-img').innerHTML = "<img src=\"" + imgURL + "\">";




    

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