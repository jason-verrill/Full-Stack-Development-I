// Get handle to mongoose collections
const mongoose = require('mongoose');
const newsCollection = mongoose.model('news');
const tipsCollection = mongoose.model('tips');

// Render page
const news = async (req, res) => {
	newsData = await newsCollection.find();
	tipsData = await tipsCollection.find();
	
	res.render('news', {title: 'Travlr Getaways', newsData, tipsData});
};

// Make objects public
module.exports = {
	news
};
