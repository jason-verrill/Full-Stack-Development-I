const mongoose = require('mongoose');

// Define a schema
const schema = new mongoose.Schema({
	code: { type: String, required: true, index: true },
	name: { type: String, required: true, index: true },
	length: { type: String, require: true },
	start: { type: Date, required: true },
	resort: { type: String, required: true },
	perPerson: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true }
});

// Create the schema
mongoose.model('trips', schema);