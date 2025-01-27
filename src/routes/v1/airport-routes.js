const router = require('express').Router();
const {AirportController} = require('../../controllers')
const {AirportMiddleware} = require('../../middlewares')

router.post('/',AirportMiddleware.validateCreateRequest, AirportController.createAirport );
router.get('/',  AirportController.getAirports );
router.get('/:id',  AirportController.getAirport );
router.delete('/:id',  AirportController.destroyAirport );












module.exports =router;







