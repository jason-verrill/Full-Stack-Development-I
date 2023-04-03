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

module.exports = {
	fetchTrips
};