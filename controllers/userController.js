const User  = require('../models/User')

module.exports.register = async (req, res) => {
    try {
        
        console.log("🚀 ~ register here: ", req.body)

        const {user} = req.body;

        if (!user ) {
            res.send({success: false, error: 'validation failed'})

            return
        }

        const userCreated = await User.create( req.body)
        console.log("🚀 ~ userCreated", userCreated)
        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in register", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.list = async (req, res) => {

    try {

        const users = await User.find()
        console.log("🚀 ~ users are", users)

        res.send({success: true, users})
        
    } catch (error) {
        console.log("🚀 ~ Error in users list ", error.message)

        res.send({success: false, error: error.message})
    }
}