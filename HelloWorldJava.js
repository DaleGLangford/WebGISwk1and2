let map;

function initMap() {
    // new operator creates a new instance - can be used for multiple maps
    // .Map(mapDiv:Node,Opts?:MapOptions)
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.17896941504006, lng: -1.8261989083505485 },
    // zoom levels:
    // 1 = world
    // 5 = landmass
    // 10 = City
    // 15 = Streets 
    // 20 = Buildings
    zoom: 17,
    mapTypeId: "satellite",

  });
}