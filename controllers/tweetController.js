const Tweet  = require('../models/Tweet')

module.exports.add = async (req, res) => {

    try {

        const {owner, text} = req.body

        if (!owner || !text) {
            res.send({success: false, error: 1})
            return
        }

        const newTweet = await Tweet.create(req.body)
            .then(item => item.populate({path: 'owner', select: 'user'}))
        
            console.log("🚀 ~ newTweet", newTweet)

        if (!newTweet) {
            res.send({success: false, error: 2})
            return
        }

        res.send({success: true, tweet: newTweet})
        
    } catch (error) {
        console.log("🚀 ~ Error in tweet add ", error.message)

        res.send({success: false, error: error.message})
    }
}
module.exports.list = async (req, res) => {

    try {

        const tweets = await Tweet.find()
        .populate({
            path: 'owner',
            select: 'user'
        })
        console.log("🚀 ~ tweets", tweets)

        res.send({success: true, tweets})
        
    } catch (error) {
        console.log("🚀 ~ Error in tweets list ", error.message)

        res.send({success: false, error: error.message})
    }
}
module.exports.listId = async (req, res) => {

    try {

        const tweet = await Tweet.findOne({_id: req.params.id})
        .populate({
            path: 'owner',
            select: 'user'
        })
        console.log("🚀 ~ tweet", tweet)

        res.send({success: true, tweet})
        
    } catch (error) {
        console.log("🚀 ~ Error in tweets listId ", error.message)

        res.send({success: false, error: error.message})
    }
}
module.exports.listByUser = async (req, res) => {

    try {
console.log(req.params);
        const tweets = await Tweet.find({owner: req.params.user})
        .populate({
            path: 'owner',
            select: 'user'
        })
        console.log("🚀 ~ tweet", tweets)

        res.send({success: true, tweets})
        
    } catch (error) {
        console.log("🚀 ~ Error in tweets listByUser ", error.message)

        res.send({success: false, error: error.message})
    }
}