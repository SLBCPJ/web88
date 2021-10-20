const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Purchase = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('purchases',Purchase)