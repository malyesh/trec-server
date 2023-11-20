const express = require('express');
const router = express.Router();
const landmarksController = require('../controllers/landmarks-controller');

apiBody = process.env.API_URL;

router.route('/:landmarkId').get(landmarksController.getAll);
router.route('/:countryId/:cityId').get(landmarksController.index);
// router.route('/:countryId/:cityId/:landmarkId').get(landmarksController.getOne);

module.exports = router;
