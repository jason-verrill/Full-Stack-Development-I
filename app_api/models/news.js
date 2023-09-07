const mongoose = require('mongoose');

// Define a schema
const schema = new mongoose.Schema({
	title: { type: String, require: true },
	link: { type: String, require: true }
});

// Create the schema
mongoose.model('news', schema);