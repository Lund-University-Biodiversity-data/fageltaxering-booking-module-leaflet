const express = require('express')
const app = express()
const port = 3000

// for API call
const https = require('https');

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


https.get('https://canmove-app.ekol.lu.se/sft/booking2.php', (resp) => {

  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    //console.log(data);
    listSites=data;
  });
  
}).on("error", (err) => {
    console.log("Error: " + err.message);
});



app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //res.send('Testing page for new fageltaxering webpage with booking map.')

  res.render('pages/index', {
    listSites: listSites
  });


})

app.listen(port, () => {
  console.log(`App http://localhost:${port}`);

  app.use(express.static(__dirname + '/public'));



})