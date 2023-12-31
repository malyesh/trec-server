const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.route('/').get(userController.index);
router.route('/signup').post(userController.signUp);
router.route('/login').post(userController.login);
router.route('/posts').get(userController.getAll);
router.route('/favorites').get(userController.favorites);

module.exports = router;
