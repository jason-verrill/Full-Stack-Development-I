// Get express public objects
const express = require('express');
const router = express.Router();

// Get news.js public objects
const controller = require('../controllers/news.js');

// Map page subpath to page function
router.get('/', controller.news);

// Set public objects
module.exports = router;
