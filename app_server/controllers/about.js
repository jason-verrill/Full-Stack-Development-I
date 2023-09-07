// Render about page
const about = (req, res) => {
	res.render('about', {title: 'Travlr Getaways'});
};

// Make objects public
module.exports = {
	about
}
