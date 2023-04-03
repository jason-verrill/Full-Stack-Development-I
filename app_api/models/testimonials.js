const mongoose = require('mongoose');

// Define a schema
const schema = new mongoose.Schema({
	author: { type: String, require: true },
	text: { type: String, require: true }
});

// Create the schema
mongoose.model('testimonials', schema);