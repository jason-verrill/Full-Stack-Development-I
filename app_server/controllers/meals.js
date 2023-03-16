// Use filesync
const fs = require('fs');

// Get JSON data
const mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

// Render meals page
const meals = (req, res) => {
	res.render('meals', {title: 'Travlr Getaways', mealsData});
};

// Make objects public
module.exports = {
	meals
}
