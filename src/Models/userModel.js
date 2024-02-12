const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    userPersonal: {
        name: {
            type: String,
            required: true,
        },

        age: {
            type: Number,
            required: true
        }
    },

    nickname: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
})

const User = model('users', userSchema)
module.exports = User

