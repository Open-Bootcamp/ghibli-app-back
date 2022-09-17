const mongoose = require('mongoose')

const characters = new mongoose.Schema({
	name: String,
	age: String,
	gender: String,
	url: { type: String, require: true },
	films: [String],
})

module.exports = mongoose.model('characters', characters)
