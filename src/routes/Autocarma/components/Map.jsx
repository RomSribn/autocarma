// Define your product name and version
tt.setProductInfo("Codepen Examples", "${analytics.productVersion}");
const center = [4.899431, 52.379189];
// Create map
var map = tt.map({
  key: "ravweIAfuNOH2XK14Tt0AWexHH79dxLS",
  container: "map",
  style: "tomtom://vector/1/basic-main",
  zoom: 12,
  center: center,
  dragPan: !window.isMobileOrTablet()
});

map.addControl(new tt.FullscreenControl());
new tt.Popup({ className: "tt-popup" })
  .setLngLat(center)
  .setHTML("Click anywhere on the map to lookup the clicked lat lon.")
  .addTo(map);
map.on("click", function(event) {
  new tt.Popup({ className: "tt-popup" })
    .setLngLat(event.lngLat)
    .setHTML("Hello, i am new marker)")
    .addTo(map);
  new tt.Marker({ className: "tt-marker" }).setLngLat(event.lngLat).addTo(map);
});
