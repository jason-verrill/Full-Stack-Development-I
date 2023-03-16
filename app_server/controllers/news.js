// Use filesync
const fs = require('fs');

// Get JSON data
const newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
const tipsData = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

// Render news page
const news = (req, res) => {
	res.render('news', {title: 'Travlr Getaways', newsData, tipsData});
};

// Make objects public
module.exports = {
	news
}
