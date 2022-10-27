import photoCollection from '../controllers/photoController.js'

let unsplash = document.getElementById('unsplash-background')
unsplash.addEventListener('DOMContentLoaded', setPhotos())

function setPhotos() {
    unsplash.style.background.url(photoCollection.full)
}