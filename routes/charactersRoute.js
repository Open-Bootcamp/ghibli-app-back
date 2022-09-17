const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')

const {
	getAllCharacters,
	sendCharacters,
	getCharacter,
} = require('../controllers/controllerCharacters')

route.get('/characters', getAllCharacters)

route.get('/characters/:id', getCharacter)

route.post('/characters', sendCharacters)

module.exports = route
