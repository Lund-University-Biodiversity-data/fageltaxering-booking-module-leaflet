const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //res.send('Testing page for new fageltaxering webpage with booking map.')

  res.render('pages/index', {});


})

app.listen(port, () => {
  console.log(`App http://localhost:${port}`);

  app.use(express.static(__dirname + '/public'));

})