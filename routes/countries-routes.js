const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries-controller');

router.route('/').get(countriesController.index);
router.route('/:countryId').get(countriesController.findOne);

module.exports = router;
