const router = require('express').Router();
const jobController = require('../../controllers/jobsController');

router
  .route('/')
  .get(jobController.findAll)
  .post(jobController.create);

router
  .route('/:id')
  .get(jobController.findById)
  .put(jobController.update)
  .delete(jobController.remove);

module.exports = router;