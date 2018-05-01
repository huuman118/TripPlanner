const mapboxgl = require("mapbox-gl");
const buildMaker = require("./marker");
mapboxgl.accessToken =
  "pk.eyJ1Ijoieml5byIsImEiOiJjamdvNGVmaDUwaHVmMnFueW16eGk4eHl3In0.jkQ29FEvOKOqO9I7yKyfHQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMaker("restaurants", [-74.009151, 40.705086]);
marker.addTo(map);
