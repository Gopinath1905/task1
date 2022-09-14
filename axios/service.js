const Login = require('../src/model');
const { userSchema } = require('../src/validation/valid');
const axios = require('axios');
require('dotenv').config();


// exports.post = async(payload) => {
//     console.log(payload)
//     try{
//         const result = await userSchema.validateAsync(payload)
//         console.log(result)
//         try{
//             const validate = await Login.query().findOne({email:payload.email})
//             if(!validate){
//               const name = payload.userName
//                 const email = payload.email
//                 const DOB = payload.DOB
//                 const hash_password = await bcrypt.hash(payload.userPassword, 10);
//                 const user = await Login.query().insert([{userName:name,email:email,DOB:DOB,userPassword:hash_password}]);
//                 return user
                
//             }
//             else return "User Already in use"
//             }
//             catch (err) {
//                 console.log(err)
//                throw err  
//             }  
//         }
//         catch (err) {
//             console.log(err)
            
//            return err || "validation error"
//         }
// }

exports.createTo=async()=> {
            try {
            //  const user1 =  await axios.get(`https://jsonplaceholder.typicode.com/users`)
            // console.log("user")
             let response = await axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/users",
                headers: {
                    contentType: "application/json",
                }
            })
            //  console.log("user",response.data)
             const users = response.data
             let array = []
             for(var user of users){    
                            try{
                                console.log(user)
                                const validate = await Login.query().findOne({email:user.email})
                                console.log(validate)
                                if(!validate){
                                  const name = user.username
                                    const email = user.email
                                    const user1 = await Login.query().insert([{userName:name,email:email}]);
                                    // return user1
                                  array.push(user1)
                                }
                                }
                                catch (err) {
                                    console.log(err)
                                   throw err  
                                }  
                            }
                            return array
             }
             catch (error) {
              return error
            }
        }




   //     const result = await userSchema.validateAsync(payload)
    //     console.log(result)   
    //     try{
    //                     const validate = await Login.query().findOne({email:payload.email})
    //                     if(!validate){
    //                         const email = payload.email
    //                         const user = await Login.query().insert([{email:email}]);
    //                         return user
    //                     }
    //                     else return "User Already in use"
    //                     }
    //                     catch (err) {
    //                         console.log(err)
    //                        throw err  
    //                     }  
    // } 