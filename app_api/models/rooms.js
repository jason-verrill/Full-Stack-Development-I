const mongoose = require('mongoose');

// Define a schema
const schema = new mongoose.Schema({
	name: { type: String, require: true },
	description: { type: String, require: true },
	rate: { type: String, require: true },
	image: { type: String, require: true }
});

// Create the schema
mongoose.model('rooms', schema);