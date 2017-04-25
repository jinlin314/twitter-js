const express = require( 'express' );
const nunjucks = require('nunjucks');``
const routes = require ('./routes');
const bodyParser = require('body-parser');
var morgan = require('morgan');

const app = express(); // creates an instance of an express application

app.use(morgan('dev')); // does same thing as code commented below

// // middleware function fires every time when an event happens
// app.use(function(req,res,next){
//   // subscribe our response to 'fininsh' event, every time when finish event triggers,
//   // execute our callback function
//   res.on('finish', function(){
//     console.log('req.method' + req.method + ' statusCode: ' + res.statusCode);
//   });
//   next();
// });

//parsing our app
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// nunjucks setup
nunjucks.configure('views', {noCache: true}); //path of the template
app.set('view engine', 'html'); // set the view engine to html
app.engine('html', nunjucks.render); // set the html engine to nunjucks

// Public static routes
app.use(express.static(__dirname + '/public')); //any file in public folder
// General routes
app.use(routes); // if no path passed in , path = '/' by default : for any routes in general, go to routes = index.js


//creating the server
app.listen(3000, ()=>{
  console.log("listening on port 3000........");
});

// nunjucks.render('index.html', locals, function(err, output){
//   // console.log(output);
// });


// app.get('/hidden', function(req, res, next){
//   res.status(201).send('peekaboo')
// })


// app.use('/stylesheets/style.css', function(req, res, next){
//   var path = __dirname;
//   console.log(">>>>",path);
//   res.sendFile(path + '/public/stylesheets/style.css');
// });

// // pass in the data to render
// app.get('/', function(req, res, next){
//   res.render('index.html', locals);
// });
//
// app.get('/news', function(req, res, next){
//   res.send('<h1>Welcome to twitter News Page</h1>');
// });
//
// app.get('/tweet/:num', function(req, res, next){
//   var tweetNum = req.params.num;
//   res.send('<h1>Welcome to twitter News Page</h1>');
// });



// nunjucks nonsense
// var locals ={
//               title: "an example",
//               people: [{name: 'Gandalf'},
//                   {name: 'Frodo'},
//                   {name: 'Hermione'}]
//             };
