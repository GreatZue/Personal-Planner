import dotenv from 'dotenv'
dotenv.config()
import axios from 'axios'
const url = new URL('https://api.unsplash.com/photos/random/?client_id=')
let photoCollection = []



export async function getPhotos() {
    try {
        axios.get(url + process.env.ACCESS_KEY)
        .then(function (response) {
            photoCollection = response.data.urls
            console.log(photoCollection)
            return photoCollection
        })
    }
    catch (error) {
        console.log(process.env.ACCESS_KEY, "Could not retreive photos.")
    }
}

export {photoCollection}