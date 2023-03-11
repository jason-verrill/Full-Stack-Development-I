// Render news page
const news = (req, res) => {
	res.render('news', {title: 'Travlr Getaways'});
};

// Make objects public
module.exports = {
	news
}
