const express = require('express')
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));


app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/:id',express.static(path.join(__dirname, 'public')));

//Reviews: 3001
// app.use('/reviews', (req, res) => {
//   const url = 'http://localhost:3001/reviews' + req.url;
//   request(url).pipe(res);
// });


//Upcoming abailablity: 3002
// app.use('/experience/availableDate', (req, res) => {
//   const url = 'http://localhost:3002/experience/availableDate/' + req.url;
//   request(url).pipe(res);
// });

//Similar Experiences: 3003
app.use('/similar', (req, res) => {
  const url = 'http://18.219.157.42:80/similar' + req.url;
  request(url).pipe(res);

});

// Photo Gallery: 3004
// app.use('/images', (req, res) => {
//   const url = 'http://localhost:3004/images';
//   request(url).pipe(res);
// });
// app.use('/img', (req, res) => {
//   const url = 'http://localhost:3004/img' + req.url;
//   request(url).pipe(res);
// });

//Details: 3005
app.use('/details', (req, res) => {
  const url = 'http://18.221.6.243:80/details' + req.url;
  request(url).pipe(res);
});


app.listen(port, () => {
  console.log(`server running...`)
});