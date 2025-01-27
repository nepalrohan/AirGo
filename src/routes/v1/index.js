const express = require('express')
const router = express.Router();

const {InfoController} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')
const airportsRoutes = require('./airport-routes')

router.use('/airplanes', airplaneRoutes)
router.use('/cities', cityRoutes)
router.use('/airports', airportsRoutes)


router.get('/info')





module.exports = router;