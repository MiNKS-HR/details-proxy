const express = require('express')
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//Reviews: 3001
app.use('/reviews', (req, res) => {
  const url = 'http://localhost:3001/reviews' + req.url;
  request(url).pipe(res);
});

//Upcoming abailablity: 3002
app.use('/experience/availableDate', (req, res) => {
  const url = 'http://localhost:3002/experience/availableDate/' + req.url;
  request(url).pipe(res);
});

//Similar Experiences: 3003
app.use('/experience/similar', (req, res) => {
  const url = 'http://localhost:3003/experience/similar' + req.url;
  request(url).pipe(res);
});

// Photo Gallery: 3004
app.use('/images', (req, res) => {
  const url = 'http://localhost:3004/images';
  request(url).pipe(res);
});
app.use('/img', (req, res) => {
  const url = 'http://localhost:3004/img' + req.url;
  request(url).pipe(res);
});

//Details: 3005
const url5 = 'http://localhost:3005';
app.use('/experience/details', (req, res) => {
  const url = url5 + '/experience/details';
  request(url).pipe(res);
});

app.use('/host/:name', (req, res) => {
  const url = url5 + req.url;
  request(url).pipe(res);
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});