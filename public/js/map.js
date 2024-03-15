

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
  var surveyName=$("#surveyName").html();

  listSites.forEach((site) => {

    var iconName='';
    var siteDisplay='';

    if (site.Status== 'JA') {
      iconName=bookedIcon;
    }
    else {
      iconName=notbookedIcon;
    }

    if (surveyName == 'std') {
      siteDisplay=site.Kartblad + ' - ' + site.Namn;
    }
    else { // natt
      siteDisplay=site.Namn;
    }
    L.marker([site.WGS84_lat, site.WGS84_lon], {icon: iconName}).addTo(map).bindPopup(siteDisplay);

  })
});



