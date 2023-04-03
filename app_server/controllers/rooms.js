// Get handle to mongoose collections
const mongoose = require('mongoose');
const roomsCollection = mongoose.model('rooms');

// Render page
const rooms = async (req, res) => {
	roomsData = await roomsCollection.find();
	
	res.render('rooms', {title: 'Travlr Getaways', roomsData});
};

// Make objects public
module.exports = {
	rooms
};
