const express = require( 'express' );
const nunjucks = require('nunjucks');
const routes = require ('./routes');
const bodyParser = require('body-parser');

const app = express(); // creates an instance of an express application

//parsing our app
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());



nunjucks.configure('views', {noCache: true}); //path of the template
// nunjucks.render('index.html', locals, function(err, output){
//   // console.log(output);
// });
app.set('view engine', 'html'); // set the view engine to html
app.engine('html', nunjucks.render); // set the html engine to nunjucks

app.use(function(req, res, next){
  console.log(req.method, req.originalUrl);
  next();
});

app.get('/hidden', function(req, res, next){
  res.status(201).send('peekaboo')
})


// app.use('/stylesheets/style.css', function(req, res, next){
//   var path = __dirname;
//   console.log(">>>>",path);
//   res.sendFile(path + '/public/stylesheets/style.css');
// });
app.use('*',function(req,res,next){
  console.log(req.method + ' /? ' + res.statusCode);
  next();
});

app.use(express.static('public')); //any file in public folder

app.use('/', routes); // '/' = for any routes in general, go to routes directory

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
// var people = {names: ['Gandalf', 'Frodo', 'Hermione']};
// var locals ={
//               title: "an example",
//               people: [{name: 'Gandalf'},
//                   {name: 'Frodo'},
//                   {name: 'Hermione'}]
//             };






//creating the server
app.listen(3000, ()=>{
  console.log("listening on port 3000........");
});
