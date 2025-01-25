const { AirplaneRepository } = require("../repositories");
const  AppError  = require("../utils/errors/app-error.js");
const airplaneRepository = new AirplaneRepository();
const { StatusCodes } = require("http-status-codes");

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(
        "Cannot create a new airplane object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  throw error;
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {

    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested is not found",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}




async function destroyAirplane(id){
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to delete is not found",
        error.statusCode
      );
    }

    throw new AppError(
      "Cannot delete data of  the requested  airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}


module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane
};
