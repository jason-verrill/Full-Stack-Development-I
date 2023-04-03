// Get handle to mongoose
const mongoose = require('mongoose');
const collection = mongoose.model('trips');

// Render travel page
const travel = async (req, res) => {
	const tripsData = await collection.find();
	res.render('travel', {title: 'Travlr Getaways', tripsData});
};

// Make objects public
module.exports = {
	travel
};
