const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    products: [
        {
            product: {type: mongoose.Types.ObjectId, ref: 'Product'},
            count: Number,
            color: String
        }
    ],
    status:{
        type:String,
        default: 'pending',
        enum: ['cancelled', 'processing', 'succeeded']
    },
    paymentIntent: {},
    orderBy:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);