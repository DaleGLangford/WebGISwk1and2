let map;

function initMap() {
    // new operator creates a new instance - can be used for multiple maps
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    // zoom levels:
    // 1 = world
    // 5 = landmass
    // 10 = City
    // 15 = Streets
    // 20 = Buildings
    zoom: 8,
  });
}