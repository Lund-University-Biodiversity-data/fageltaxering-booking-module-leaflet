
$(document).ready(function () {

  // set the map
  var map = L.map('map').setView([62.47204526039855, 16.149376718556645], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);

});



