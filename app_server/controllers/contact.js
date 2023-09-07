// Render contact page
const contact = (req, res) => {
	res.render('contact', {title: 'Travlr Getaways'});
};

// Make objects public
module.exports = {
	contact
}
