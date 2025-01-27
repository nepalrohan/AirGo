const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");


//create airports 
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
        name: req.body.name,
        cityId: req.body.cityId,
        code:req.body.code,
        address:req.body.address
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}



//get all airports

async function getAirports(req, res) {
  try {
    const Airports = await AirportService.getAirports();
    SuccessResponse.data = Airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}





//get single airport 

async function getAirport(req, res) {
    try {
      const airport = await AirportService.getAirport(req.params.id);
      SuccessResponse.data = airport;
      return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode ).json(ErrorResponse);
    }
  }


//destroy airport

async function destroyAirport(req, res) {
  try {
    const airport = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode ).json(ErrorResponse);
  }
}


//exporting Airports controllers
module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport

};
