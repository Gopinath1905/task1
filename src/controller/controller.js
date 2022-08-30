const userService = require('../service/login');


exports.signup = async(req,res, next) => {
    console.log(req.payload)
    const user = await userService.signup(req.payload)
    console.log(user)
    return res.response(user).code(200)
}

exports.login = async(req,res,next) => {
    const user = await userService.login(req.payload)
    console.log(user)
    return res.response(user).code(200)
}