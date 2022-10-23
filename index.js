const express = require('express')
const path = require('path')
const app = express()
const bodyParser  = require('body-parser')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))

var PORT = process.env.port || 3000

app.listen(PORT, function(error) {
    if (error) throw error
    console.log("Now running server on port: ", PORT)
})

app.get('/', (req, res) => {
    res.send()
})