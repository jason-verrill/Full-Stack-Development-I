// Use filesync
const fs = require('fs');

// Get JSON data
const roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

// Render rooms page
const rooms = (req, res) => {
	res.render('rooms', {title: 'Travlr Getaways', roomsData});
};

// Make objects public
module.exports = {
	rooms
}
