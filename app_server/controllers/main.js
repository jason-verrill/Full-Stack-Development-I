// Render index page
const index = (req, res) => {
	res.render('index', {title: 'Travlr Getaways'});
};

// Make objects public
module.exports = {
	index
}
