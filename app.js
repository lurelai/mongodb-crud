const express = require('express')
const app = express()

const mongoose = require('mongoose')

// try a connection with database
require('./src/Database/db')()


// default config
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes
require('./src/Routes/userRoute')(app)


app.get('/', (req, res)=>{
    res.send('Ola Mundo')
})

app.listen(8080)

