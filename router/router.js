const loginRoute = require('../src/controller/controller')
const sampleCtrl = require('../src/controller/sampleController')

module.exports = [

{
    method: 'POST',
    path: '/api/auth/signup',
    handler: loginRoute.signup
},

{
    method: 'POST',
    path: '/api/auth/login',
    handler: loginRoute.login
},
{
    method: 'POST',
    path: '/api/updateprofile',
    handler: sampleCtrl.updateProfilePicture
}
//,
// {
//     method: 'POST',
//     path: '/api/auth/getProfilePicture',
//     handler: loginRoute.getProfilePicture
// }
]