//creates google map
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 30, lng: -90},
zoom: 4
});

//adds KML layers
var ctaLayer = new google.maps.KmlLayer({
    url: 'http://code.google.com/apis/kml/documentation/us_states.kml',
    map: map
  });
  
//adds KML layers
var ctaLayer = new google.maps.KmlLayer({
    url: 'http://www.geonames.org/kml/feature-networklink.kml',
    map: map
  });
  
  
  
  