// 13.2.4: Add Logic.js file
// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

// We create the tile layer that will ne the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add a marker to the map for Los Angeles California 
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//13.4.2: Add Multiple Markers
// Getting data from cities.js
let cityData = cities;


// Loop through the cities array ad create one marker for each city 
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "yellow"
    })
    // Build pop-up
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});


// Add a circle to the map
//L.circleMarker([34.0522, -118.2437], {
//    radius: 300,
//    color: "yellow",
//    fillcolor: '#ffffa1'
//}).addTo(map);