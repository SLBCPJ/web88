const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    value: Number,
    status: Boolean,
    img: String

});

productSchema.methods.setImg = function(file){
    this.img = '/public/'+file
}

module.exports = mongoose.model('products', productSchema);