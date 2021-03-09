var map;
//set map options
var myLatLng = {lat: 43.4643, lng: -80.5204};
var mapOptions = {
    center: myLatLng,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}

//creating autocomplete objects
var input1 = document.getElementById("departure");
var input2 = document.getElementById("destination");

var options = {
    types: ['(cities)']
}
// autocomplete edited to include intracity locations
var autocomplete1 = new google.maps.places.Autocomplete(input1);
var autocomplete2 = new google.maps.places.Autocomplete(input2);

//onload:
google.maps.event.addDomListener(window, 'load', initialize);

//initialize: draw map in #googlemap div
function initialize(){
    //create map
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}