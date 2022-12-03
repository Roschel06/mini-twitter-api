const mongoose = require('mongoose')

const {Schema} = mongoose

const tweetSchema = new Schema({
    text: {
        type: String
    },
    owner: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Tweet', tweetSchema)