(function($) {

	
	let map, infoWindow;

	function initMap() {
	  map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 6,
	  });
	  infoWindow = new google.maps.InfoWindow();
	
	  const locationButton = document.createElement("button");
	
	  locationButton.textContent = "Pan to Current Location";
	  locationButton.classList.add("custom-map-control-button");
	  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
	  locationButton.addEventListener("click", () => {
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(
			(position) => {
			  const pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			  };
	
			  infoWindow.setPosition(pos);
			  infoWindow.setContent("Location found. Retrieving additional information...");
	
			  // Call a custom function to handle the additional information
			  getAdditionalLocationInfo(pos);
	
			  infoWindow.open(map);
			  map.setCenter(pos);
			},
			() => {
			  handleLocationError(true, infoWindow, map.getCenter());
			}
		  );
		} else {
		  handleLocationError(false, infoWindow, map.getCenter());
		}
	  });
	}
	
	function getAdditionalLocationInfo(pos) {
	  const request = {
		location: pos,
		radius: "500", // Search radius in meters
		type: "restaurant",
		keyword: "pizza"
	  };
	
	  const service = new google.maps.places.PlacesService(map);
	  service.nearbySearch(request, (results, status) => {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
		  // Loop through the results and do something with each pizza restaurant
		  for (let i = 0; i < results.length; i++) {
			const place = results[i];
			// Example: Log the name and address of each pizza restaurant
			console.log(place.name, place.vicinity);
		  }
		}
	  });
	
	  // Update the info window content once you have the additional information
	  infoWindow.setContent("Location found. Additional information: ...");
	}
	
	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	  infoWindow.setPosition(pos);
	  infoWindow.setContent(
		browserHasGeolocation
		  ? "Error: The Geolocation service failed."
		  : "Error: Your browser doesn't support geolocation."
	  );
	  infoWindow.open(map);
	}
	
	google.maps.event.addDomListener(window, "load", initMap);
	

	"use strict";

	var fullHeight = function() {
	  $('.js-fullheight').css('height', $(window).height());
	  $(window).resize(function(){
		$('.js-fullheight').css('height', $(window).height());
	  });
	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
	  $('#sidebar').toggleClass('active');
	});

	function getLocation() {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	  } else {
		alert("Geolocation is not supported by this browser.");
	  }
	}

	function showPosition(position) {
	  var latitude = position.coords.latitude;
	  var longitude = position.coords.longitude;
	  var mapFrame = document.getElementById("map");
	  var mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59992.12130018419!2d" + longitude + "!3d" + latitude + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697e2157452dd%3A0x9115fb6da097700f!2sSINE%20da%20ALMG!5e0!3m2!1spt-BR!2sbr!4v1684197249001!5m2!1spt-BR!2sbr";
	  mapFrame.setAttribute("src", mapUrl);
	}

	getLocation();

	

  })(jQuery);