var express = require('express');
var router = express.Router();
var Vehicle = require('../models/vehicle');

/* GET home page. */
router.get('/', function(req, res) {
  Vehicle.find(function(err, vehicles) {
	for (var i=0; i < vehicles.length; i++) {
	vehicles[i].honk();
	}

  	res.render('index', { 
  		title: 'Express', 
  		vehicles: vehicles }) // passing vehicles to the view.
  });
});

router.get('/newVehicle', function(req, res) {
	// Create a new vehicle object
	var newVehicle = new Vehicle({
		name: req.param('name'),
		color: req.param('color')
	});

	// Store it in the data
	newVehicle.save(function(err, savedVehicle) {
		console.log(err);
		console.log(savedVehicle);

		// redirect back to the homepage
		res.redirect('/');
	});
})

router.get('/view', function(req, res) {
	Vehicle.find(function(err, vehicles) {
		res.send(vehicles);
	});
})

module.exports = router;
