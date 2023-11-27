const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts-controller');

router.route('/').get(postController.index);
router.route('/create').post(postController.add);
router.route('/:postId').get(postController.getOne);

module.exports = router;
