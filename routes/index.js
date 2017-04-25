const express = require('express');
const router = express.Router();


// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();

  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res, next){
  var username = req.params.name;
  var tweets = tweetBank.find({name: username});
  res.render('index', {tweets: tweets, username: username, showForm: true}); // index.html
});

router.get('/tweets/:id', function(req,res,next){
  var thisId = req.params.id;
  var tweets = tweetBank.find({id: +thisId});
  res.render('index', {tweets: tweets});
});

router.post('/tweets', function(req,res){
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/users/' + name);

});


module.exports = router;
