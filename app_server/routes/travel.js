// Get express public objects
const express = require('express');
const router = express.Router();

// Get travel.js public objects
const controller = require('../controllers/travel.js');

// Map page subpath to page function
router.get('/', controller.travel);

// Set public objects
module.exports = router;
