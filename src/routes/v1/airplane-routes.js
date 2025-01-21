const router = require('express').Router();
const {AirplaneController} = require('../../controllers')



router.post('/', AirplaneController.createAirplane )




module.exports =router;








