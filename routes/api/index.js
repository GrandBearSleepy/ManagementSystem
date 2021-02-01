const router = require('express').Router();

const customerRoutes = require('./customers');
const cleanerRouters = require('./cleaners');

router.use('/customers', customerRoutes);
router.use('/cleaners', cleanerRouters);

module.exports = router; 