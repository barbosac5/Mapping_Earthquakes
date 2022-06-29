// 13.2.4: Add Logic.js file
// Add console.log to check to see if our code is working
console.log("working");

// 13.5.3: Create the map object with a center and zoom level
//let map = L.map('mapid').setView([30, 30], 2);


// Add GeoJSON data
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// We create tile layer that will ne the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.5.4: We create the dark view tile layer that will be an option for our map
let satellitestreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps 
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satellitestreets
};

// Create the map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satellitestreets]
});

// Pass our map layers into our layer control and add the layer control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/barbosac5/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
// Creating a GeoJSON layer with the retrieved data
L.geoJSON(data).addTo(map);
});