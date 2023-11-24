const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favorites-controller');

router.route('/').post(favoritesController.favorite);
router.route('/:postId').get(favoritesController.isFavorited);
// router.route('/posts').get(favoritesController.getFavorites);

module.exports = router;
