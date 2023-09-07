// Get express public objects
const express = require('express');
const router = express.Router();

// Get meals.js public objects
const controller = require('../controllers/meals.js');

// Map page subpath to page function
router.get('/', controller.meals);

// Set public objects
module.exports = router;
