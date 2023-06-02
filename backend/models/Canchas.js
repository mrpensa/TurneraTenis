const mongoose = require('mongoose')
const {Schema } = mongoose;

const cancha = new Schema({
    id: Number,
    superficie: String,
    dias: [String,[]],
})

module.exports = mongoose.model('Cancha', Cancha)