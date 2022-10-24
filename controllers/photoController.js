const axios = require('axios')
require('dontenv').config();

const url = new URL('https://api.unsplash.com/photos/?client+id=')

export async function getPhotos() {
    try {
        document.getElementById
        axios.get(url + process.env.ACCESS_KEY)
    }
    catch (error) {
        console.log("Could not retreive photos.")
    }
}

