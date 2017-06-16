var db = require('../helpers/database');
var myschema = db.myschema;
var mongoose= db.mongoose;
var Schema       = mongoose.Schema;
var UserSchema   = new Schema({
    name: String
}, { collection: 'myuser' });
var myschema = mongoose.model('myuser', UserSchema);
exports.new_user = function(data,cb){

	db.getConnection(function(err){
		var newuser = new myschema({ name: data});
		newuser.save(function (err) {
		  db.closeConnection();
		  cb(err,"user saved!");
		});

    });
}
exports.get_users = function(cb){

	db.getConnection(function(err){
		myschema.find(function(err, users) {
			db.closeConnection();           
            cb(err,users);
        });

    });
}
exports.user_detail = function(data,cb){

	db.getConnection(function(err){
		myschema.findById(data, function(err, user) {
            db.closeConnection();           
            cb(err,user);
        });

    });
}
exports.update_user = function(id,data,cb){

	db.getConnection(function(err){
		myschema.findById(id, function(err, user) {
			user.name = data;  // update the user info

            // save the user
            user.save(function(err) {
               db.closeConnection();            
               cb(err,"user updated!");
            });
            
        });

    });
}
exports.delete_user = function(id,cb){

	db.getConnection(function(err){
		myschema.remove({
            _id: id
        }, function(err, user) {
            db.closeConnection();           
            cb(err,"user deleted!");
        });

    });
}


