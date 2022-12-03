const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    user: {
        type: String
    }
}) 

module.exports = mongoose.model('User', userSchema)