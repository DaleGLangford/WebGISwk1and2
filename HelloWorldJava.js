let map;

function initMap() {
    // new operator creates a new instance - can be used for multiple maps
    // .Map(mapDiv:Node,Opts?:MapOptions)
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.178, lng: -1.826 },
    // zoom levels:
    // 1 = world
    // 5 = landmass
    // 10 = City
    // 15 = Streets 
    // 20 = Buildings
    zoom: 15,
  });
}