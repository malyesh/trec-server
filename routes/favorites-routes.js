const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favorites-controller');

router.route('/').post(favoritesController.favorite);

router
  .route('/:postId')
  .get(favoritesController.isFavorited)
  .delete(favoritesController.unFavorite);

module.exports = router;
