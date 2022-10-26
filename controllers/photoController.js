require('dotenv').config({path: '../.env'})
const axios = require('axios')

const url = new URL('https://api.unsplash.com/photos/random/?client_id=')

export async function getPhotos() {
    try {
        // axios.get(url + process.env.ACCESS_KEY)
        axios.get(url + process.env.ACCESS_KEY)
        .then(function (response) {
            console.log(response.data.urls)
            return response.data.urls
        })
    }
    catch (error) {
        console.log(process.env.ACCESS_KEY, "Could not retreive photos.")
    }
}


// require('./photoController.js')
