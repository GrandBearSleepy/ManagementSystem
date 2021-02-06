const router = require('express').Router();

const userController = require('../../controllers/usersController');


router
  .route('/users')
  .get(userController.login)
  .put(userController.register)