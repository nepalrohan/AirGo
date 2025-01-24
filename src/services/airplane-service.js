const {AirplaneRepository} = require('../repositories')
const {AppError} = require('../utils/errors/app-error.js')
const airplaneRepository = new AirplaneRepository();
const {StatusCodes} = require("http-status-codes")
async function createAirplane(data){

try {
    
const airplane = await airplaneRepository.create(data);
return airplane;


} 

catch (error) {
    
  if(error.name === 'SequelizeValidationError'){
    let explanation = [];
  error.errors.forEach((err)=>{
    explanation.push(err.message);
  })

    throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
throw error;
}



module.exports = {
    createAirplane
}