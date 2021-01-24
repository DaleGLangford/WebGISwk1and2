function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      // centre on Stone Henge
      center: { lat: 51.17896941504006, lng: -1.8261989083505485 },
      mapTypeId: "satellite",
    });

///////////////////////////////////////MARKERS///////////////////////////////////////////

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

  // Locations of Stonehenge features
  const locations = [
    { lat: 51.17896941504006, lng: -1.8261989083505485 }, // Stone Henge
    { lat: 51.18047015766694, lng: -1.8231479948025724 }, // Avenue
    { lat: 51.18509521520769, lng: -1.8340513592077423 }, // Cursus
    { lat: 51.18413978703078, lng: -1.8309588686939435 }, //Cursus Barrows
    { lat: 51.17855786938449, lng: -1.8090608177386087 }, // King Barrow Ridge
    { lat: 51.184776668529615, lng: -1.8060699806071134 }, // Old Kings Barrow
    { lat: 51.18771646655638, lng: -1.804865932124448 }, // Long Barrow
    { lat: 51.17047295274773, lng: -1.8347242659363576 }, // Bush Barrow
    { lat: 51.189385040727416, lng: -1.7857622285233417 }, // Wood Henge
    { lat: 51.19268362244375, lng: -1.7872467287312461 }, // Durrington Walls
  ];


///////////////////////////////////////POLYGONS///////////////////////////////////////////

// Set polygones for Avenue and Curcus
// Define the LatLng coordinates for the polygon's path.
  const avenueCoords = [
    { lat: 51.179523912908344, lng: -1.8252399257461556 }, // sw corner
    { lat: 51.18256715437142, lng: -1.8195303593967194 }, // nw corner
    { lat: 51.182547160011154, lng: -1.8192113892175406 }, // ne corner
    { lat: 51.17939402446637, lng: -1.8248940019997915 }, // se corner
  ];
  // Construct the avenue polygon.
  const avenue = new google.maps.Polygon({
    paths: avenueCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  avenue.setMap(map);


const cursusCoords = [
  { lat: 51.18483569231366, lng: -1.8356648924191814 }, // sw corner 
  { lat: 51.18502230626078, lng: -1.8358363073614685 }, // nw corner 
  { lat: 51.18546339077806, lng: -1.8307389681993118 }, // ne corner 
  { lat: 51.18536725733478, lng: -1.8299315136027496 }, // se corner 
];
// Construct the  cursus polygon.
const cursus = new google.maps.Polygon({
  paths: cursusCoords,
  strokeColor: "#f5aa0a",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#f5aa0a",
  fillOpacity: 0.35,
});
cursus.setMap(map);


///////////////////////////////////////CIRCLES///////////////////////////////////////////