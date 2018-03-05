const express = require('express')
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


//Details: 3005
const url5 = 'http://localhost:3005';
app.get('/experience/details', (req, res) => {
  const url = url5 + '/experience/details';
  request(url).pipe(res);
});

app.get('/host/:name', (req, res) => {
  const url = url5 + req.url;
  request(url).pipe(res);
});

//Similar Experiences: 3003
const url3 = 'http://localhost:3003';
app.get('/id/:id', (req, res) => {
  console.log(req.url);
  const url = url3 + req.url;
  request(url).pipe(res);
});

app.get('/experience/similar/:id', function(req, res) {
  const url = url3 + req.url;
  request(url).pipe(res);
});

app.get('/experience/similar/location/:location', function(req, res) {
  const url = url3 + req.url;
  request(url).pipe(res);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});