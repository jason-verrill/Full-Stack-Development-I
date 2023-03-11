// Get express public objects
const express = require('express');
const router = express.Router();

// Get rooms.js public objects
const controller = require('../controllers/rooms.js');

// Map page subpath to page function
router.get('/', controller.rooms);

// Set public objects
module.exports = router;
