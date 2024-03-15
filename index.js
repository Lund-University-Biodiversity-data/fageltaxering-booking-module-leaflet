const express = require('express')
const app = express()
const port = 3000

// for API call
const https = require('https');

const UrlStd='https://canmove-app.ekol.lu.se/sft/booking2.php';
const urlNatt='https://canmove-app.ekol.lu.se/sft/booking2.php?t=n';

/*
examples for test without WS
var listSites = [
  {
    "Kartblad":  "02C7H",
    "Namn":  "ÖRTOFTA",
    "RT90n": "",
    "RT90o": "",
    "WGS84_lat": "55.78919",
    "WGS84_lon": "13.21456",
    "Status":  "JA",
  },
  {
    "Kartblad":  "02D2C",
    "Namn":  "BLENTARP",
    "RT90n": "",
    "RT90o": "",
    "WGS84_lat": "55.57256",
    "WGS84_lon": "13.6253",
    "Status":  "NO",
  },
  {
    "Kartblad":  "02D7C",
    "Namn":  "SEBBARP",
    "RT90n": "",
    "RT90o": "",
    "WGS84_lat": "55.79694",
    "WGS84_lon": "13.61277",
    "Status":  "NO"
  }
];
*/




app.set('view engine', 'ejs');


app.get('/', (req, res) =>  {
  res.send('Testing page for new fageltaxering webpage with booking map. Check the pages std-bokning and std-natt')

})

app.get('/std-bokning', (req, res) => {

  var listSitesStd = [];

  // fetch the booking data for STD
  https.get(UrlStd, (resp) => {

    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {

      listSitesStd=data;

      res.render('pages/std-bokning', {
        listSites: listSitesStd,
        surveyName: 'std' 
      });
    });
    
  }).on("error", (err) => {
      console.log("Error: " + err.message);
  });

})


app.get('/natt-bokning', (req, res) => {

  var listSitesNatt = [];

  // fetch the booking data for NATT
  https.get(urlNatt, (resp) => {

    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      
      listSitesNatt=data;

      res.render('pages/natt-bokning', {
        listSites: listSitesNatt,
        surveyName: 'natt'
      });
    });
    
  }).on("error", (err) => {
      console.log("Error: " + err.message);
  });


})

app.listen(port, () => {
  console.log(`App launched at http://localhost:${port}`);
  console.log(`Standardrutternas bokning sida at http://localhost:${port}/std-bokning`);
  console.log(`Nattrutternas bokning sida at http://localhost:${port}/natt-bokning`);

  app.use(express.static(__dirname + '/public'));
})