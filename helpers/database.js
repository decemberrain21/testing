var mongoose   = require('mongoose');

var getConnection = function(callback) {
	mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/user',function(err){
    	if (err) console.log(err);
    	callback(err);
    });
};

var closeConnection = function(){
	mongoose.connection.close();
};


		
exports.getConnection = getConnection;
exports.closeConnection = closeConnection;
exports.mongoose = mongoose;
//exports.myschema = mongoose.model('myuser', UserSchema);