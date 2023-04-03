// Get handle to mongoose collections
const mongoose = require('mongoose');
const mealsCollection = mongoose.model('meals');

// Render page
const meals = async (req, res) => {
	mealsData = await mealsCollection.find();
	
	res.render('meals', {title: 'Travlr Getaways', mealsData});
};

// Make objects public
module.exports = {
	meals
};
