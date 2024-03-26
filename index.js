// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Who am i API
app.get('/api/whoami', (req, res) => {
  const ip = req.ip
  const acceptsLanguages = req.headers["accept-language"]
  const userAgent = req.headers["user-agent"]

  res.status(200).send({
    "ipaddress": ip, "language": acceptsLanguages,
    "software": userAgent
  })
  // console.log(req.headers["accept-language"])
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
// git remote set-url origin https://github.com/ASIM-OSAMA/Request-Header-Parser-Microservice.git
// git branch -M main
// git push -u origin main