function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      // centre on Stone Henge
      center: { lat: 51.18414374969637, lng: -1.8196466675058371 },
      mapTypeId: "satellite",
    });

///////////////////////////////////////MARKERS///////////////////////////////////////////

    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    
    // For custom marker
    // http://maps.google.com/mapfiles/kml/shapes/donut.png
    const markImage = "./SHimages/icon18.png"

    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        icon: markImage,
      });
    });



    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

///////////////////////////////////////POLYGONS///////////////////////////////////////////

  // Set polygones for Avenue and Curcus
  // Construct the avenue polygon.
  const avenue = new google.maps.Polygon({
    paths: avenueCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    // fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  avenue.setMap(map);

  // Construct the  cursus polygon.
  const cursus = new google.maps.Polygon({
    paths: cursusCoords,
    strokeColor: "#f5aa0a",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    // fillColor: "#f5aa0a",
    fillOpacity: 0.35,
  });
  cursus.setMap(map);

  // Construct the  cursus polygon.
  const cursusBarrow = new google.maps.Polygon({
    paths: cursusBarrowCoords,
    strokeColor: "#fa05ee",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    // fillColor: "#f5aa0a",
    // fillOpacity: 0.35,
  });
  cursusBarrow.setMap(map);

///////////////////////////////////////CIRCLES///////////////////////////////////////////

  // Construct the circle for each value in STONEHENGE.
  for (const shp in stoneHengeCoord) {
    // Add the circle for this city to the map.
    const stoneHenge = new google.maps.Circle({
      strokeColor: "#8d05fc",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      // fillColor: "#FF0000",
      // fillOpacity: 0.35,
      map,
      center: stoneHengeCoord[shp].center,
      radius: 30,
    });
  }

  // Construct the circle for each value in STONEHENGE.
  for (const shp in woodHengeCoord) {
    // Add the circle for this city to the map.
    const woodHenge = new google.maps.Circle({
      strokeColor: "#35ff03",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      // fillColor: "#FF0000",
      // fillOpacity: 0.35,
      map,
      center: woodHengeCoord[shp].center,
      radius: 30,
    });
  }
  
  // Construct the circle for each value in STONEHENGE.
  for (const shp in durringtonCoord) {
    // Add the circle for this city to the map.
    const durrington = new google.maps.Circle({
      strokeColor: "##fcba05",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      // fillColor: "#FF0000",
      // fillOpacity: 0.35,
      map,
      center: durringtonCoord[shp].center,
      radius: 50,
    });
  }
}


///////////////////////////////////////FEATURE LOCATIONS///////////////////////////////////////////
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
///////////////////////////////////////POLYGONS LOCATIONS///////////////////////////////////////////

  // Set polygones for Avenue and Curcus
  // Define the LatLng coordinates for the polygon's path.
  const avenueCoords = [
    { lat: 51.179523912908344, lng: -1.8252399257461556 }, // sw corner
    { lat: 51.18257409438144, lng: -1.819606395493052 }, // nw corner 
    { lat: 51.182547160011154, lng: -1.8192113892175406 }, // ne corner
    { lat: 51.17939402446637, lng: -1.8248940019997915 }, // se corner
  ];

  const cursusCoords = [
    { lat: 51.18483569231366, lng: -1.8356648924191814 }, // sw corner 
    { lat: 51.18512734633522, lng: -1.835834319743218 }, // nw corner  
    { lat: 51.185580842153016, lng: -1.830094968103578 }, // ne corner 
    { lat: 51.18536725733478, lng: -1.8299315136027496 }, // se corner 
  ];

  const cursusBarrowCoords = [
    // Starting from NW clockwise
    { lat: 51.1843039448978, lng: -1.8333676836935195 }, // 51.1843039448978, -1.8333676836935195
    { lat: 51.184493388516515, lng: -1.8312475514250086 }, // 51.184493388516515, -1.8312475514250086 
    { lat: 51.184507526068764, lng: -1.8292401921495034 }, // 51.184507526068764, -1.8292401921495034 
    { lat: 51.18433504763488, lng: -1.828698881783075 }, // 51.18433504763488, -1.828698881783075
    { lat: 51.184004226537525, lng: -1.828685349023914 }, // 51.184004226537525, -1.828685349023914
    { lat: 51.18374409204125, lng: -1.8290507335212534 }, // 51.18374409204125, -1.8290507335212534
    { lat: 51.183806298250005, lng: -1.8309182542854314 }, // 51.183806298250005, -1.8309182542854314
    { lat: 51.183882642118746, lng: -1.8334714348470855 }, // 51.183882642118746, -1.8334714348470855
  ];

///////////////////////////////////////CIRCLES LOCATIONS///////////////////////////////////////////

const stoneHengeCoord = {
  SH: {
    center: { lat: 51.17884746557931, lng: -1.8261648247449185 },
  },
};

const woodHengeCoord = {
  SH: {
    center: { lat: 51.18940448632424, lng: -1.7857723653369122 },
  },
};

const durringtonCoord = {
  SH: {
    center: { lat: 51.19260045740331, lng: -1.7872243807601182 }, 
  },
};



///////////////////////////////////////INFO WINDOWS CONTENT///////////////////////////////////////////
