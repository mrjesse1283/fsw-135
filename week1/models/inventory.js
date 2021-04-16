const mongoose = require('mongoose')
const Schema = mongoose.schema


const inventorySchema = new Schema({

    item: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true

    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)
