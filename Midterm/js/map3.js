 var map;
	require(["esri/map", "esri/dijit/BasemapToggle", "esri/layers/ArcGISDynamicMapServiceLayer", "dojo/domReady!"], 
	function(Map, BasemapToggle, ArcGISDynamicMapServiceLayer) {
        map = new Map("map", {
          basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-90, 30], // longitude, latitude
          zoom: 4
        });
		
		// Create a layer object from an ArcGIS Server web service, setting the opacity option
var layer2 = new ArcGISDynamicMapServiceLayer( "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/mapoverlays_political/MapServer/", {
  "opacity": 1.00
});
map.addLayer(layer2); // add the layer object to the map

		// Create a layer object from an ArcGIS Server web service, with no options
var layer1 = new ArcGISDynamicMapServiceLayer( "esri/layers/ArcGISDynamicMapServiceLayer" );
			map.addLayer(layer1); // add the layer object to the map
		var toggle = new BasemapToggle({
        map: map,
        basemap: "satellite"
      }, "BasemapToggle");
      toggle.startup();
      
});
	  


