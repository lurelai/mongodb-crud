const mongoose = require('mongoose')
require('dotenv').config()

const createConnection = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log('DATABASE CONNECTED')
    }catch(err){ throw err }
}

module.exports = createConnection

