const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('*', function(req, res, next){
  console.log(req.method, req.originalUrl);
  next();
});

app.get('/', function(req, res, next){
  res.send('<h1>Welcome to twitter</h1>');
});

app.get('/news', function(req, res, next){
  res.send('<h1>Welcome to twitter News Page</h1>');
});

var server = app.listen(3000, ()=>{
  console.log("listening on port 3000........");
});
