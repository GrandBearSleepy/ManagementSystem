const router = require('express').Router();
const cleanersController = require('../../controllers/cleanersController');

router
  .route('/')
  .get(cleanersController.findAll)
  .post(cleanersController.create);

router
  .route('/:id')
  .get(cleanersController.findById)
  .put(cleanersController.update)
  .delete(cleanersController.remove);

router
  .route('/job/:id')
  .post(cleanersController.addJob)

module.exports = router;