// Render travel page
const travel = (req, res) => {
	res.render('travel', {title: 'Travlr Getaways'});
};

// Make objects public
module.exports = {
	travel
}
