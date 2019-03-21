var mongoose = require('mongoose');

var vehicleSchema = mongoose.Schema(
	{ name: String, 
	  color : String,
	  wheels: {
	  	type: Number,
	  	default: 4
	  }
	});

// Custom-method:
vehicleSchema.methods.honk = function() {
	console.log( this.name + ' say HONK!');
}

var Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;


