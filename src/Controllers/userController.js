const { create, erase } = require('../Services/userService')

const createController = async (req, res)=>{
    if(!req.body.userPersonal)
        return res.status(401).send('Bad requestion')

    const { nickname, email, password } = req.body
    const { name, age } = req.body.userPersonal

    if(!nickname || !email || !password || !name || !age)
        return res.status(401).send('Bad requestion')

    let message = await create({
        userPersonal: {
            name,
            age
        },
        nickname,
        email,
        password
    })

    return res.status(201).send(message)
}

const eraseController = async (req, res)=>{
    const { nickname, password } = req.body

    if(!nickname || !password)
        return res.status(401).send('Bad requestion')

    const message = await erase({nickname, password})
    return res.send(message)
}

module.exports = { createController, eraseController }

