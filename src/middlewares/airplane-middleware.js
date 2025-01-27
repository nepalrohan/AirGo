const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')
const {AppError} = require('../utils/errors/app-error.js')

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){

ErrorResponse.message = "Model Number not found in incomming request";
ErrorResponse.error = new AppError(["Model Number not found in incomming request"], StatusCodes.BAD_REQUEST)

        return res.
        status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
 
    next();
}



module.exports = {
    validateCreateRequest
}


