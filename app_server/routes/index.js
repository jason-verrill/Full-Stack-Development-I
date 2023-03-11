// Get express public objects
const express = require('express');
const router = express.Router();

// Get main.js public objects
const ctrlMain = require('../controllers/main');

// Map page subpath to page function
router.get('/', ctrlMain.index);

// Set public objects
module.exports = router;
