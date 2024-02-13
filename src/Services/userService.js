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

const erase = (toDelete)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            await User.findOneAndDelete(toDelete)
            resolve({m̀essage: 'User deleted'})
        }catch(err){
            resolve({message: err})
        }
    })
}

const update = (nickname, toUpdate)=>{
    return new Promise(async (resolve)=>{
        try{
            await User.updateOne(nickname, toUpdate)
            resolve({message: 'user updated'})
        }catch(err){
            console.log(err)
            resolve({message: err})
        }
    })
}

module.exports = { create, erase, update }

