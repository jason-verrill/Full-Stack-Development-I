// Package includes
const mongoose = require('mongoose');

// File includes
require('./blogs');
require('./meals');
require('./news');
require('./rooms');
require('./testimonials');
require('./tips');
require('./trips');
require('./user');

// Seed the database
const {seed} = require('./seed');

// Server data
const host = process.env.DB_HOST || '127.0.0.1';
const conn_uri = 'mongodb://' + host + '/travlr';

// Close MongoDB gracefully and log activity
const gracefulShutdown = (msg, callback) => {
	mongoose.connection.close( () => {
		console.log('Mongoose disconnected due to ${msg}');
		callback();
	});
}

// Event listeners and callback definitions to log activity
mongoose.connection.on('connected', () => console.log('CONNECTED!'));
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.on('disconnected', () => console.log('DISCONNECTED!'));

// Windows alternative event listener
process.on('SIGINT', () => gracefulShutdown('app termination', () => process.exit(0)));

// Connect to MongoDB
async function main() {
	await mongoose.connect(conn_uri);
	await seed();
}

main().catch(console.log);
