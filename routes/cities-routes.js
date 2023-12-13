const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/cities-controller');

router.route('/').get(citiesController.index);

module.exports = router;
