const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const Order = require('../models/order');

const createOrder = asyncHandler(async(req,res) => {
})

const updateOrder = asyncHandler(async(req,res) => {

})

module.exports = {
    createOrder,
    updateOrder
}