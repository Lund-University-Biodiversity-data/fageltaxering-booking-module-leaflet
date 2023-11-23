

$(document).ready(function () {

  // set the map
  var map = L.map('map').setView([62.47204526039855, 16.149376718556645], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
      minZoom: 5,
      maxZoom: 7,
      attribution: '© OpenStreetMap'
  }).addTo(map);


  var bookedIcon = L.icon({
      iconUrl: 'img/marker-green.png',
      iconSize:     [8, 8], // size of the icon
  });

  var notbookedIcon = L.icon({
      iconUrl: 'img/marker-white.png',
      iconSize:     [8, 8], // size of the icon
  });

  var listSites=JSON.parse(decodeURIComponent($("#listSitesHidden").html()));

  listSites.forEach((site) => {
    if (site.Status== 'JA') {
      L.marker([site.WGS84_lat, site.WGS84_lon], {icon: bookedIcon}).addTo(map).bindPopup("02C7H");
    }
    else {
      L.marker([site.WGS84_lat, site.WGS84_lon], {icon: notbookedIcon}).addTo(map).bindPopup("02C7H");
    }
  })
});



