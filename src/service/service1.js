const axios = require('axios');


exports.filter=async()=> {
    try {
     let response = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos",
        headers: {
            contentType: "application/json",
        }
        })
        const user = response.data
        let users = user.filter(x => x.userId === 1)
        console.log(users)
        return users
    }
    catch (error) {
      return error
    }
}

exports.map = async(payload) =>{
    let response1 = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
            contentType: "application/json",
        })
let response2 = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/albums",
        contentType: "application/json",
    })
    let user = {}
let users = response1.data.map(x => response2.data.map(y =>{
    if (x.id == y.id && x.id ==1 && y.id ==1){
       user.id = x.id
       user.userId = y.userId
       user.albumId = x.albumId
       user.title = x.title
       user.url = x.url
       user.thumbnailUrl = x.thumbnailUrl
    }
}))
return user
}



