// Use filesync
const fs = require('fs');

// Get JSON data
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));
const testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json', 'utf8'));

// Render index page
const index = (req, res) => {
	res.render('index', {title: 'Travlr Getaways', blogs, testimonials});
};

// Make objects public
module.exports = {
	index
}
