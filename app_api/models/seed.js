const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const seed = async function() {
	// Seed blogs data
	const blogsSeed = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/blogs.json'), 'utf8'));
	const blogs = mongoose.model('blogs');
	await blogs.deleteMany();
	await blogs.insertMany(blogsSeed);
	
	// Seed meals data
	const mealsSeed = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/meals.json'), 'utf8'));
	const meals = mongoose.model('meals');
	await meals.deleteMany();
	await meals.insertMany(mealsSeed);
	
	// Seed news data
	const newsSeed = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/news.json'), 'utf8'));
	const news = mongoose.model('news');
	await news.deleteMany();
	await news.insertMany(newsSeed);
	
	// Seed rooms data
	const roomsSeed = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/rooms.json'), 'utf8'));
	const rooms = mongoose.model('rooms');
	await rooms.deleteMany();
	await rooms.insertMany(roomsSeed);
	
	// Seed testimonials data
	const testimonialsSeed = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/testimonials.json'), 'utf8'));
	const testimonials = mongoose.model('testimonials');
	await testimonials.deleteMany();
	await testimonials.insertMany(testimonialsSeed);
	
	// Seed tips data
	const tipsSeed = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/tips.json'), 'utf8'));
	const tips = mongoose.model('tips');
	await tips.deleteMany();
	await tips.insertMany(tipsSeed);
	
	// Seed trips data
	const tripsSeed = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8'));
	const trips = mongoose.model('trips');
	await trips.deleteMany();
	await trips.insertMany(tripsSeed);
}

module.exports = { seed };