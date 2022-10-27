import path from 'path'
import express from 'express'
let app = express()
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import {dirname} from 'path'
import pug from 'pug'
import {getPhotos} from '../controllers/photoController.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const compiledView = pug.compileFile('../views/index.pug')
var PORT = process.env.port || 3000



app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.dirname('')))
app.set('view engine', 'pug')
app.set('views', '../views')



app.listen(PORT, function(error) {
    if (error) throw error
    console.log("Now running server on port: ", PORT)
})

app.get('/', (req, res, next) => {
    res.render('index')
    next()
})

app.use('/', (req, res, next) => {
    console.log(getPhotos())
    console.log(res.body)
    // compiledView(res)
})