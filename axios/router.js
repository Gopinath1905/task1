const loginRoute = require('./controller');

module.exports = [

    {
        method: 'GET',
        path: '/api/createTo',
        handler: loginRoute.createTo
    }
]