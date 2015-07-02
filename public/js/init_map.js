function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("googleMap");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
      // icon: /path/to/file;
    });
        var styles = [
	       	{
	    		"featureType": "water",
	    		"stylers": [
	      			{ "color": "#101010" }
	    		]
	  		},{
			    "featureType": "landscape",
			    "stylers": [
			      { "color": "#435E5E" }
			    ]
			},{
				"featureType": "road.local",
				"stylers": [
				{ "color": "white" }
				]
			},{
				"featureType": "road.arterial",
				"stylers": [
				{ "color": "#00B2B2" }
				]
			},{
				"featureType": "road.highway",
				"stylers": [
				{ "color": "#A3FFFF" }
				]
			},{
	    		"featureType": "poi",
	    		"stylers": [
	      			{ "color": "#fff" }
	    		]
	  		},{
	    		"featureType": "transit.line",
	    		"stylers": [
	      			{ "visibility": "off" }
	    		]
	  		},{
	    		"featureType": "administrative",
	    		"stylers": [
	      			{ "color": "#E0FFFF" },
	      			{ "visibility": "simplified" }
	    		]
	  		}
        ];
	map.setOptions({styles: styles});
    // Add the marker to the map by calling setMap()
    marker.setMap(map);
  }

  $(document).ready(function() {
    initialize_gmaps();

});