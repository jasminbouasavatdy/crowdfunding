const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;
