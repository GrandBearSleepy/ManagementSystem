const router = require('express').Router();

const customerRoutes = require('./customers');
const cleanerRouters = require('./cleaners');
const jobRouters = require('./job')


router.use('/customers', customerRoutes);
router.use('/cleaners', cleanerRouters);
router.use('/jobs', jobRouters);



module.exports = router; 