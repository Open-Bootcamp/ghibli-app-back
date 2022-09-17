const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')

const {
	getAllCharacters,
	sendCharacters,
} = require('../controllers/controllerCharacters')

route.get('/characters', getAllCharacters)

route.post('/characters', sendCharacters)

module.exports = route
