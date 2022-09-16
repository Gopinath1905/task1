const userService = require('../service/service1')

exports.filter = async(req,res, next) => {
    console.log(req.users)
    const user = await userService.filter(req.users)
    console.log(user)
    return res.response(user).code(200)
}

exports.map = async(req,res,next) => {
    console.log(req.payload)
    const user = await userService.map(req.payload)
    console.log(user)
    return res.response(user).code(200)
}