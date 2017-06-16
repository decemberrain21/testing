var express = require('express');
var router = express.Router(); // get an instance of the express Router
var api_model = require('../models/api');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api!' });   
});
//to create new user
router.post('/users', function(req, res) {
    api_model.new_user(req.body.name, function(err, data) { 
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	}); 
});
//to get all users
router.get('/users', function(req, res) {
    api_model.get_users(function(err, data) { 
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	}); 
});
//to get individual user by id
router.get('/users/:user_id', function(req, res) {
    api_model.user_detail(req.params.user_id,function(err, data) { 
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	}); 
});
//to update individual user
router.put('/users/:user_id', function(req, res) {
    api_model.update_user(req.params.user_id,req.body.name,function(err, data) { 
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	}); 
});
//to delete user by id
router.delete('/users/:user_id', function(req, res) {
    api_model.delete_user(req.params.user_id,function(err, data) { 
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	}); 
});
module.exports = router;