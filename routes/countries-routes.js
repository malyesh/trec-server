const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries-controller');

apiBody = 'https://countriesnow.space/api/v0.1/countries';

router.route('/').get(countriesController.index);
router.route('/:countryId').get(countriesController.findOne);

module.exports = router;
