//map to open at the set longitude and longitude, as well as zoom level of 4
var map = L.map('map').setView([40, -95], 4);

//my basemap from Leaflet, establishes the tile layer, gray map canvas
var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

//pulls layer 9(the township layer)from the NOAA website and adds it to my map
var Townships = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", {
    layers: '9',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
}).addTo(map);

//pulls layer 8(counties)from the NOAA website and adds it to my map, made partially opaque
var Counties = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", {
    layers: '8',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
	opacity: 0.50
}).addTo(map);

//pulls layer 7(states)from the NOAA website and adds it to my map, made partially opaque
var States = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", {
    layers: '7',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
	opacity: 0.25
}).addTo(map);

//names my baselayer to my map "political" to match my website's brand
var baseLayers = {
    "Political": map
};

//places map controls on my map, and names them accordingly
var overlays = {
    "Townships": Townships,
    "Counties": Counties,
	"States": States
};

//adds baselayer and overlays from above to map controls
L.control.layers(baseLayers, overlays).addTo(map);