const {StatusCodes} = require('http-status-codes')


function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        return res.
        status(StatusCodes.BAD_REQUEST)
        .json({
            success:false,
            message:"Something went wrong creating a plane",
            data:{},
            error:{explanation:"Model Number not found in incomming requets"}
        })
    }

    next();
}



module.exports = {
    validateCreateRequest
}