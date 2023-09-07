// Get express public objects
const express = require('express');
const router = express.Router();

// Get about.js public objects
const controller = require('../controllers/about.js');

// Map page subpath to page function
router.get('/', controller.about);

// Set public objects
module.exports = router;
