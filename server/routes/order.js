const router = require('express').Router()
const {verifyAccessToken, isAdmin} = require('../middlewares/verifyToken')
const order = require('../controllers/order')

router.post('/', [verifyAccessToken] , order.createOrder)

module.exports = router