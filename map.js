var map;
//set map options
var myLatLng = {lat: 43.46, lng: 80.52};
var mapOptions = {
    center: myLatLng,
    zoom: 10,
    mapTypeId: google.maps.mapTypeId.ROADMAP
}

//onload:
google.maps.event.addDomListener(window, 'load', initialize);

//initialize: draw map in #googlemap div
function initialize(){
    //create map
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)
}