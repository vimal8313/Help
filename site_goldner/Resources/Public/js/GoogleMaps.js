<!--
// JavaScript Document, GoogleMaps.js

 $(window).load(function() {
	GM_initialize();
 });

 //Google Maps --> Map initialization
 var map;
 var directionDisplay;
 var directionsService = new google.maps.DirectionsService();

 function GM_initialize() {

	 //Direction
	 directionsDisplay = new google.maps.DirectionsRenderer();

	 //Map Optionen
	 var myOptions = {
									 //Latitude, Longitude
	  center: new google.maps.LatLng(50.27753387358404, 12.235808372497559),
	  zoom: 13,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  overviewMapControl: true,
	  mapTypeControl: true,
	  mapTypeControlOptions: {
		style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
	  },
	  zoomControl: true,
	  zoomControlOptions: {
		style: google.maps.ZoomControlStyle.LARGE
	  },
	};

	//Laden der Karte ohne Marker und Co
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	//direction
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('getdirections'));

	//Marker
	var Marker_Img = new google.maps.MarkerImage('fileadmin/templates/picture_layout/GoogleMaps/gruen.png',
	// This marker is 32 pixels wide by 32 pixels tall.
	new google.maps.Size(32, 32),
	// The origin for this image is 0,0.
	new google.maps.Point(0,0),
	// The anchor for this image is the base of the flagpole at 16,32.
	new google.maps.Point(16, 32));


	var MarkerPos = new google.maps.LatLng(50.27753387358404, 12.235808372497559);
	var Marker = new google.maps.Marker({
										 position: MarkerPos,
										 map: map,
										 title: "Goldner Anker Bad Elster",
										 icon: Marker_Img,
	});

 }

 //GM - Direction
 $('#F4N_RequestDirection').live("click", function () { //.click(function() {

	var startaddress = $('#saddr').val();
	startaddress = $.trim(startaddress);
	startaddress = startaddress.replace('\n', ', ');

	var zieladdress = $('#daddr').val();

	//V3 Api
	var request = {
		origin: startaddress,
		destination: zieladdress,
		travelMode: google.maps.TravelMode.DRIVING
	};

	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
		  directionsDisplay.setDirections(result);
		}
  	});

	return false;
 });

//
-->