// Render rooms page
const rooms = (req, res) => {
	res.render('rooms', {title: 'Travlr Getaways'});
};

// Make objects public
module.exports = {
	rooms
}
