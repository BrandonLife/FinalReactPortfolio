const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema({
title: String,
overview: String,
url: String

})

module.exports = mongoose.model('Card', cardSchema)