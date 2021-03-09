var map;
var directionsDisplay;
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

// create direction service object to use route method
var directionsService = new google.maps.DirectionsService();

//onload:
google.maps.event.addDomListener(window, 'load', initialize);

//initialize: draw map in #googlemap div
function initialize(){
    //create DirectionsRenderer to be used to display the route
    directionsDisplay = new google.maps.DirectionsRenderer()
    //create map
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    // bind DirectionsRenderer to map
    directionsDisplay.setMap(map);
}

// Calculate route with autocomplete
google.maps.event.addListener(autocomplete1, 'place_changed', calcRoute);
google.maps.event.addListener(autocomplete2, 'place_changed', calcRoute);

// Calculate route
function calcRoute(){
    var start = $('#departure').val();
    var end = $('#destination').val();
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    if(start && end){
        directionsService.route(request, function(response, status){
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(response);
            }
        });
    }else{
        initialize();
    }
}