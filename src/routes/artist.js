const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist');

router.get('/', artistController.read);

module.exports = router;