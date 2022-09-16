const Login = require('../src/model');
const { userSchema } = require('../src/validation/valid');
const axios = require('axios');
require('dotenv').config();


exports.createTo=async()=> {
            try {
             let response = await axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/users",
                headers: {
                    contentType: "application/json",
                }
            })
             const users = response.data
             let array = []
             for(const user of users){    
                                console.log(user)
                                const validate = await Login.query().findOne({email:user.email})
                                console.log(validate)
                                if(!validate){
                                  const name = user.username
                                    const email = user.email
                                    const user1 = await Login.query().insert([{userName:name,email:email}]);
                                  array.push(user1)
                                } 
                            }
                            return array
             }
             catch (error) {
              return error
            }
        }

 