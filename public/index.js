const express = require('express')
const path = require('path')
const app = express()
const bodyParser  = require('body-parser')

const photoController = require('../controllers/photoController')

var PORT = process.env.port || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(__dirname))


app.listen(PORT, function(error) {
    if (error) throw error
    console.log("Now running server on port: ", PORT)
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
    async function getPhotos() {
        photoController.getPhotos()
    }
})

