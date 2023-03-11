// Render meals page
const meals = (req, res) => {
	res.render('meals', {title: 'Travlr Getaways'});
};

// Make objects public
module.exports = {
	meals
}
