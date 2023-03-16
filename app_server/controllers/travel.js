// Use filesync
const fs = require('fs');

// Get JSON data
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Render travel page
const travel = (req, res) => {
	res.render('travel', {title: 'Travlr Getaways', trips});
};

// Make objects public
module.exports = {
	travel
};
