function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      // centre on Stone Henge
      center: { lat: 51.178, lng: -1.826 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  // Locations set to Ontario Provincial Parks
  const locations = [
    { lat: 51.17896941504006, lng: -1.8261989083505485 },

  ];