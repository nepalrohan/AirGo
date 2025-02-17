const express = require('express')
const router = express.Router();

const {InfoController} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')
const airportsRoutes = require('./airport-routes')
const flightsRoutes = require('./flight-routes')


router.use('/airplanes', airplaneRoutes)
router.use('/cities', cityRoutes)
router.use('/airports', airportsRoutes)
router.use('/flights', flightsRoutes)



router.get('/info')





module.exports = router;