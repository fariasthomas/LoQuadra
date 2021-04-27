
const map = L.map(document.getElementById('mapid'), {
  center: [-23.5613462, -46.6586759],
  zoom: 17
})

const baseMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 50,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoidGhvbWFzZmFyaWFzeiIsImEiOiJja253ZWhjZXIwaXRyMnBzNXJ2dHI5dTJqIn0.fmQ0BAYInXHky63l6kL9Kw'
}).addTo(map);

// Configurações do popup
var _a = useState({ latitude: 0, longitude: 0 }), position = _a[0], setPosition = _a[1];

function handleMapClick(event) {
  var _a = event.latlng, lat = _a.lat, lng = _a.lng;
  setPosition({
      latitude: lat,
      longitude: lng,
  });
}

const iconMarker = document.createElement('<img src="/images/marker.svg"/>')

const marker = L.popup([position.latitude, position.longitude]).getIcon(iconMarker).addTo(map)