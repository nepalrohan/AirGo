const router = require('express').Router();
const {CityController} = require('../../controllers');


router.post('/', CityController.createCity);



module.exports = router;