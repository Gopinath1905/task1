const loginRoute = require('../src/controller/controller1')

module.exports = [

    {
        method: 'GET',
        path: '/api/filter',
        handler: loginRoute.filter
    },
    {
        method: 'GET',
        path: '/api/map',
        handler: loginRoute.map
    }
]