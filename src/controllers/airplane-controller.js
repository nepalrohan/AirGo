const {AirplaneService} = require('../services')
const {StatusCode} = require("http-status-codes")

async function createAirplane(req, res){

    try {
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
return res.status(StatusCode.CREATED).json({
    success:true,
    message:"Succesfully created airplane",
    data:response,
    error:{}
})

    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong while creating airplane",
            data:{},
            error:error
        })
    }
}


module.exports= {
    createAirplane
}