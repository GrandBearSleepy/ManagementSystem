const router = require('express').Router();

const customerRoutes = require('./customers');
const cleanerRouters = require('./cleaners');
const userRouters= require('./user')


router.use('/customers', customerRoutes);
router.use('/cleaners', cleanerRouters);



module.exports = router; 