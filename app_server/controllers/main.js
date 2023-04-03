// Get handle to mongoose collections
const mongoose = require('mongoose');
const blogsCollection = mongoose.model('blogs');
const testimonialsCollection = mongoose.model('testimonials');

// Render page
const index = async (req, res) => {
	blogsData = await blogsCollection.find();
	testimonialsData = await testimonialsCollection.find();
	
	res.render('index', {title: 'Travlr Getaways', blogsData, testimonialsData});
};

// Make objects public
module.exports = {
	index
};
