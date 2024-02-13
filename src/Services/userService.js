const User = require('../Models/userModel')

const create = (add)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            await User.create(add)
            resolve({message: 'User created'})
        }catch(err){
            if(err.code === 11000)
                resolve({message: 'This nickname already exist'})
        }
    })
}

module.exports = { create }

