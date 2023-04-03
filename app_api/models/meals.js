const mongoose = require('mongoose');

// Define a schema
const schema = new mongoose.Schema({
	title: { type: String, require: true },
	image: { type: String, require: true },
	name: { type: String, require: true },
	description: { type: String, require: true }
});

// Create the schema
mongoose.model('meals', schema);