const express = require('express');
const router = express.Router();
const landmarksController = require('../controllers/landmarks-controller');

apiBody = process.env.API_URL;

router.route('/').get(landmarksController.all);
router.route('/:search').get(landmarksController.bySearch);
router.route('/feed/:landmarkId').get(landmarksController.getAll);
router.route('/:countryId/:cityId').get(landmarksController.index);

module.exports = router;
