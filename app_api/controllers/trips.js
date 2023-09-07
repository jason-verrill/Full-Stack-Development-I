const mongoose = require('mongoose');
const trips = mongoose.model('trips');

const fetchTrips = async (req, res) => {
	if (!!req.params.tripCode) {
		try {
			const response = await trips.findOne({'code': req.params.tripCode});
			
			if (!response) {
				throw 'No trip found for code ' + req.params.tripCode;
			}
			
			res.json(response);
		} 
		catch (e) {
			res.status(404).send(e);
		}
		return;
	}
	res.json(await trips.find({}));
};

const addTrip = async (req, res) => {
	const newTrip = req.body;
	
	if (!newTrip) {
		// 400 BAD REQUEST error because no Trip was sent
		res.status(400).send('No trip record found in body of request');
		return;
	}
	
	try {
		const savedTrip = await trips.create(newTrip);
		
		// 201 CREATED response with the trip -- we send it back because it'll have the MongoDB _id now
		res.status(201).json(savedTrip);
	} catch(e) {
		// 400 BAD REQUEST error because we failed to create the trip
		res.status(400).json(e);
	}
};

const updateTrip = async (req, res) => {
	const tripCode = req.params.tripCode;
	let trip = req.body;
	
	// Overwrite tripCode in body with tripCode in URL
	trip = Object.assign(trip, {tripCode});
	
	try {
		const updatedTrip = await trips.findOneAndUpdate({'code': tripCode}, trip, {new: true});
		
		// Trip not found
		if (updatedTrip == null) {
			res.status(404).send({message: `No trip was found for code: ${tripCode}`});
			return;
		}
		
		res.status(200).json(updatedTrip);
	} catch(e) {
		res.status(500).json(e);
	}
};

module.exports = {
	fetchTrips,
	addTrip,
	updateTrip
};