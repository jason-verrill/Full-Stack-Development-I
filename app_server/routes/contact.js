// Get express public objects
const express = require('express');
const router = express.Router();

// Get contact.js public objects
const controller = require('../controllers/contact.js');

// Map page subpath to page function
router.get('/', controller.contact);

// Set public objects
module.exports = router;
