const express = require('express')
const router = express.Router();

const tweetController = require('../controllers/tweetController')

router.post('/add', tweetController.add)
router.get('/list', tweetController.list)
router.get('/list/:id', tweetController.listId)
router.get('/listbyuser/:user', tweetController.listByUser)
module.exports = router