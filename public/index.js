import path from 'path'
import express from 'express'
let app = express()
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import {dirname} from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

import {getPhotos} from '../controllers/photoController.js'

var PORT = process.env.port || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.dirname('')))


app.listen(PORT, function(error) {
    if (error) throw error
    console.log("Now running server on port: ", PORT)
})

app.get('/', (req, res, next) => {
    getPhotos()
    res.sendFile(path.join(__dirname, '../views/index.html'))
})