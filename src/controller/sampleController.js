

exports.updateProfilePicture = async(req,res,next) =>{
    console.log("here")
    const user = await userService.updateprofile(req.payload)
    console.log(user)
    return res.response(user).code(200)

}




// module.exports = {
//     updateProfilePicture
// }