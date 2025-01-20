const {StatusCodes} = require('http-status-codes')


const info = (req, res)=>{
    return res.statuS(StatusCodes.OK).json({
        success:true,
        message:"Api is live",
        error:{},
        data:{}
    })
}


module.exports ={

    info
}