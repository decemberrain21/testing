// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var port = process.env.PORT || 7000;        // set our port
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./controllers'));

app.use(function(req, res, next){
  console.log(res.status);
  res.status(404).render('404', { url: req.url });
  return;
 
 });
 
 //express error-handling
 app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!')
})
 
app.listen(port, function() {
  console.log('Listening on port ' + port);
});