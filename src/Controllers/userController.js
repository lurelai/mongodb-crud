const { create } = require('../Services/userService')

const createController = async (req, res)=>{
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

module.exports = { createController }

