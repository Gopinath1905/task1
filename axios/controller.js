const userService = require('./service');


exports.createTo = async(req,res, next) => {
    // console.log(req.payload)
    const user = await userService.createTo()
    console.log(user)
    return res.response(user).code(200)
}
