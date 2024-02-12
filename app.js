const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes
require('./src/Routes/userRoute')(app)


app.get('/', (req, res)=>{
    res.send('Ola Mundo')
})

app.listen(8080)

