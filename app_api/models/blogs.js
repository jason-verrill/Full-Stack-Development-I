const mongoose = require('mongoose');

// Define a schema
const schema = new mongoose.Schema({
	title: { type: String, require: true },
	date: { type: String, require: true },
	text: { type: String, require: true }
});

// Create the schema
mongoose.model('blogs', schema);