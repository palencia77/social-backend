var map;
var markers = [];
var geographic_location = null;
var marker = null;
var infowindow = null;
var myCenter = new google.maps.LatLng(10.068248347064115,-69.34201776981354);

//draws the map receives as pararmetro the elemtento where it will be drawn
function drawMap(elementDraw)
{
var mapProp = {
  center: myCenter,
  zoom:13,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(elementDraw,mapProp);

  google.maps.event.addListener(map, 'click', function(event) {
	clearGeographiLocation();
    addMarker(event.latLng);
  });
  
  setTimeout('resizeMap()', 200);
  setTimeout('setCenter()', 200); 
}

//allows the map fits the size where is drawn
function resizeMap(){
	google.maps.event.trigger(map,'resize');
}

//add a marker to a map receives as a parameter the location (latitude and longitude)
function addMarker(location) {
	marker = new google.maps.Marker({
    position: location,
    map: map,
  	animation:google.maps.Animation.BOUNCE,
    icon:'/public/images/bee.png'
  });
  	markers.push(marker);   	
  	geographic_location = [location.lat(),location.lng()];
  	
}

//returns a specific point on the map (latitude and longitude) in an array
function getGeographicLocation(){
	return geographic_location;
}

//sets the geographic location to null and clears all map markers
function clearGeographiLocation(){
	geographic_location = null;
	marker = null;
	deleteMarkers();
}

//Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

//add a specific marker for parameters passed 
function locationReceived(lat,lng,name) {
	locationLatLng = new google.maps.LatLng(lat,lng);
	addMarker(locationLatLng);	
	setTimeout('setCenter()', 200); 
	infowindow = new google.maps.InfoWindow({
  		content: "Causa " + name
  		});
	setTimeout('showWindow()', 200); 
	
}
function setCenter(){
	if (marker != null){
		map.setCenter(marker.getPosition());
	}else{
		map.setCenter(myCenter);
	}
}
function showWindow(){
	infowindow.open(map,marker);
}

 

